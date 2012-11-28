<?php
require_once "../../lib/google-api-php-client/src/Google_Client.php";
require_once '../../lib/google-api-php-client/src/contrib/Google_Oauth2Service.php';
require_once('../php/ClassLoader.php');

Kort\ClassLoader::registerAutoLoader();
$client = new Google_Client();
$oauth2 = new Google_Oauth2Service($client);

//refresh user info
if (isset($_GET['code'])) {
    $client->authenticate($_GET['code']);
    session_start();
    $token = $client->getAccessToken();

    $user = $oauth2->userinfo->get();
    $fields = array('name', 'email', 'oauth_provider');
    $table = "kort.user";
    $user['oauth_provider'] = "Google";

    $authObj = json_decode($token);
    if (isset($authObj->refresh_token)) {
           $user['token'] = $authObj->refresh_token;
           $fields[] = "token";
    }

    //save user data in database
    $dbProxy = new Webservice\DbProxy($table, $fields);
    $dbProxy->setReturnFields(array('user_id'));
    $insertedUser = json_decode($dbProxy->insert($user), true);

     $_SESSION['user_id'] = $insertedUser['user_id'];
}

$appUrl = 'http://' . $_SERVER['HTTP_HOST'];
if ($_SERVER['HTTP_HOST'] === "localhost") {
    $appUrl .= "/kort";

    if (isset($_GET['state']) && !empty($_GET['state'])) {
        $appUrl .= "/build/Kort/" . $_GET['state'] . "/";
    }
}

header('Location: ' . $appUrl);
