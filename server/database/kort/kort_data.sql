-- fill data in table error_type
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (90, 'motorway_ref', 'Autobahn ohne Bezeichner', 'ref', 'text', 'Bezeichner', 'Ist diese Bezeichnung korrekt?', 10, 5, 3);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (100, 'religion', 'Kultstätte/Kirche ohne Religion', 'religion', 'select', 'Religion', 'Ist diese Kultstätte/Kirche von dieser Religion?', 15, 5, 3);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (110, 'poi_name', 'Objekt ohne Namen', 'name', 'text', 'Name', 'Passt der Name zum gegebenen Objekt?', 15, 5, 3);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (300, 'missing_maxspeed', 'Fehlendes Tempolimit', 'maxspeed', 'number', 'Tempolimit', 'Darf man auf dieser Strasse mit dieser Geschwindigkeit fahren?', 10, 5, 3);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (360, 'language_unknown', 'Sprache des Namens unbekannt', 'name:XX', 'select', 'Sprache', 'Ist der Name in folgender Sprache?', 5, 5, 3);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (390, 'missing_track_type', 'Typ des Wegs unbekannt', 'tracktype', 'select', 'Typ', 'Ist der Weg folgendermassen beschaffen?', 5, 5, 5);
insert into kort.error_type (error_type_id, type, description, osm_tag, view_type, answer_placeholder, vote_question, fix_koin_count, vote_koin_count, required_votes) values (71, 'way_wo_tags', 'Strasse ohne Namen', 'name', 'text', 'Strassenname', 'Ist dieser Strassenname korrekt?', 15, 5, 3);

-- Insert badge
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (1, 'highscore_place_1', '1. Rang', 'Erster Rang in der Highscore erreicht.', '#FFFBCB', 110, null);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (2, 'highscore_place_2', '2. Rang', 'Zweiter Rang in der Highscore erreicht.', '#d9d9d9', 120, null);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (3, 'highscore_place_3', '3. Rang', 'Dritter Rang in der Highscore erreicht.', '#d8c69a', 130, null);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (4, 'fix_count_100', '100 Aufträge', '100 Aufträge erledigt.', '#FFFBCB', 210, 100);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (5, 'fix_count_50', '50 Aufträge', '50 Aufträge erledigt.', '#d9d9d9', 220, 50);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (6, 'fix_count_10', '10 Aufträge', '10 Aufträge erledigt.', '#d8c69a', 230, 10);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (7, 'vote_count_1000', '1000 Prüfungen', '1000 Antworten überprüft.', '#FFFBCB', 310, 1000);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (8, 'vote_count_100', '100 Prüfungen', '100 Antworten überprüft.', '#d9d9d9', 320, 100);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (9, 'vote_count_10', '10 Prüfungen', '10 Antworten überprüft.', '#d8c69a', 330, 10);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (10, 'fix_count_1', '1. Auftrag', 'Erster Auftrag erledigt.', '#CFFFD2', 410, 1);
insert into kort.badge (badge_id, name, title, description, color, sorting, compare_value) VALUES (11, 'vote_count_1', '1. Prüfung', 'Erste Antwort überprüft.', '#CFFFD2', 420, 1);

-- Insert missing_track_types
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (1, 'missing_track_type', 'grade1', 'Asphalt, Beton oder Pflastersteine', 110);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (2, 'missing_track_type', 'grade2', 'Schotter', 120);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (3, 'missing_track_type', 'grade3', 'Feinschotter-, Sand- oder Erdweg', 130);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (4, 'missing_track_type', 'grade4', 'Weg mit Pflanzenwuchs entlang der Spurmitte', 140);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (5, 'missing_track_type', 'grade5', 'Unbefestigter Weg', 150);

-- Insert religion
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (10, 'religion', 'buddhist','Buddhismus (Tempel)' , 110);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (11, 'religion', 'christian', 'Christentum (Kirche)', 120);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (12, 'religion', 'hindu', 'Hinduismus (Tempel)', 130);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (13, 'religion', 'jewish', 'Judentum (Synagoge)', 140);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (14, 'religion', 'multifaith', 'Mehrere Religionen', 150);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (15, 'religion', 'muslim', 'Islam (Moschee)', 160);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (16, 'religion', 'pastafarian', 'Pastafarianismus', 170);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (17, 'religion', 'shinto', 'Shinto (Schrein)', 180);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (18, 'religion', 'sikh', 'Sikh (Gurdwara)', 190);

-- Insert language_unknown
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (151, 'language_unknown', 'de', 'Deutsch', 10);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (140, 'language_unknown', 'en', 'Englisch', 20);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (147, 'language_unknown', 'fr', 'Französisch', 30);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (170, 'language_unknown', 'it', 'Italienisch', 40);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (106, 'language_unknown', 'ar', 'Arabisch', 100);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (129, 'language_unknown', 'zh', 'Chinesisch', 200);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (136, 'language_unknown', 'da', 'Dänisch', 300);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (138, 'language_unknown', 'nl', 'Holländisch', 400);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (140, 'language_unknown', 'fi', 'Finnisch', 500);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (152, 'language_unknown', 'el', 'Griechisch', 600);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (157, 'language_unknown', 'he', 'Hebräisch', 700);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (172, 'language_unknown', 'ja', 'Japanisch', 800);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (214, 'language_unknown', 'no', 'Norwegisch', 900);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (226, 'language_unknown', 'pl', 'Polnisch', 1000);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (228, 'language_unknown', 'pt', 'Portugiesisch', 1100);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (230, 'language_unknown', 'rm', 'Rätoromanisch', 1200);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (232, 'language_unknown', 'ro', 'Rumänisch', 1300);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (233, 'language_unknown', 'ru', 'Russisch', 1400);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (243, 'language_unknown', 'gsw', 'Schweizerdeutsch', 1500);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (248, 'language_unknown', 'es', 'Spanisch', 1600);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (252, 'language_unknown', 'sv', 'Schwedisch', 1700);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (263, 'language_unknown', 'tr', 'Türkisch', 1800);
insert into kort.answer (answer_id, type, value, title, sorting) VALUES (273, 'language_unknown', 'vi', 'Vietnamesisch', 1900);