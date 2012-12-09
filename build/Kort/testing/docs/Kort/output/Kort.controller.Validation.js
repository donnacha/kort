Ext.data.JsonP.Kort_controller_Validation({"tagname":"class","name":"Kort.controller.Validation","extends":"Ext.app.Controller","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.controller.Validation","code_type":"ext_define","members":{"cfg":[{"name":"control","tagname":"cfg","owner":"Kort.controller.Validation","meta":{"private":true},"id":"cfg-control"},{"name":"itemTapDisabled","tagname":"cfg","owner":"Kort.controller.Validation","meta":{"private":true},"id":"cfg-itemTapDisabled"},{"name":"refs","tagname":"cfg","owner":"Kort.controller.Validation","meta":{"private":true},"id":"cfg-refs"},{"name":"views","tagname":"cfg","owner":"Kort.controller.Validation","meta":{"private":true},"id":"cfg-views"}],"property":[],"method":[{"name":"getControl","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-getControl"},{"name":"getItemTapDisabled","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-getItemTapDisabled"},{"name":"getRefs","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-getRefs"},{"name":"getViews","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-getViews"},{"name":"init","tagname":"method","owner":"Kort.controller.Validation","meta":{"private":true},"id":"method-init"},{"name":"onValidationListItemTap","tagname":"method","owner":"Kort.controller.Validation","meta":{"private":true},"id":"method-onValidationListItemTap"},{"name":"onValidationRefreshButtonTap","tagname":"method","owner":"Kort.controller.Validation","meta":{"private":true},"id":"method-onValidationRefreshButtonTap"},{"name":"refreshView","tagname":"method","owner":"Kort.controller.Validation","meta":{"private":true},"id":"method-refreshView"},{"name":"setControl","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-setControl"},{"name":"setItemTapDisabled","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-setItemTapDisabled"},{"name":"setRefs","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-setRefs"},{"name":"setViews","tagname":"method","owner":"Kort.controller.Validation","meta":{},"id":"method-setViews"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Validation.js","href":"Validation.html#Kort-controller-Validation"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>Kort.controller.Validation</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Validation.html#Kort-controller-Validation' target='_blank'>Validation.js</a></div></pre><div class='doc-contents'><p>Controller for validation tab</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-cfg-control' class='name expandable'>control</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{validationList: {itemtap: 'onValidationListItemTap'}, validationRefreshButton: {tap: 'onValidationRefreshButtonTap'}}</code></p></div></div></div><div id='cfg-itemTapDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-itemTapDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-cfg-itemTapDisabled' class='name expandable'>itemTapDisabled</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-cfg-refs' class='name expandable'>refs</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mainTabPanel: '#mainTabPanel', validationNavigationView: '#validationNavigationView', validationList: '.validationlist', validationRefreshButton: '#validationNavigationView .button[cls=validationRefreshButton]'}</code></p></div></div></div><div id='cfg-views' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-cfg-views' class='name expandable'>views</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['validation.NavigationView', 'validation.List', 'validation.vote.Container']</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getControl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Validation-cfg-control\" rel=\"Kort.controller.Validation-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemTapDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-itemTapDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-getItemTapDisabled' class='name expandable'>getItemTapDisabled</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of itemTapDisabled. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Validation-cfg-itemTapDisabled\" rel=\"Kort.controller.Validation-cfg-itemTapDisabled\" class=\"docClass\">itemTapDisabled</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Validation-cfg-refs\" rel=\"Kort.controller.Validation-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-getViews' class='name expandable'>getViews</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of views. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Validation-cfg-views\" rel=\"Kort.controller.Validation-cfg-views\" class=\"docClass\">views</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onValidationListItemTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-method-onValidationListItemTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-onValidationListItemTap' class='name expandable'>onValidationListItemTap</a>( <span class='pre'>list, index, target, record, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Displays vote panel for given validation ...</div><div class='long'><p>Displays vote panel for given validation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>list</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onValidationRefreshButtonTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-method-onValidationRefreshButtonTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-onValidationRefreshButtonTap' class='name expandable'>onValidationRefreshButtonTap</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-refreshView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-method-refreshView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-refreshView' class='name expandable'>refreshView</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Refreshes validations view ...</div><div class='long'><p>Refreshes validations view</p>\n</div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )</div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Validation-cfg-control\" rel=\"Kort.controller.Validation-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setItemTapDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-itemTapDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-setItemTapDisabled' class='name expandable'>setItemTapDisabled</a>( <span class='pre'>itemTapDisabled</span> )</div><div class='description'><div class='short'>Sets the value of itemTapDisabled. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Validation-cfg-itemTapDisabled\" rel=\"Kort.controller.Validation-cfg-itemTapDisabled\" class=\"docClass\">itemTapDisabled</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>itemTapDisabled</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )</div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Validation-cfg-refs\" rel=\"Kort.controller.Validation-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Validation'>Kort.controller.Validation</span><br/><a href='source/Validation.html#Kort-controller-Validation-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Validation-method-setViews' class='name expandable'>setViews</a>( <span class='pre'>views</span> )</div><div class='description'><div class='short'>Sets the value of views. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Validation-cfg-views\" rel=\"Kort.controller.Validation-cfg-views\" class=\"docClass\">views</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>views</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});