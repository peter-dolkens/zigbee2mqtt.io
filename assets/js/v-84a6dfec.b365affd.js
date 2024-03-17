"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43461],{117902:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-84a6dfec","path":"/devices/MCCGQ13LM.html","title":"Aqara MCCGQ13LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara MCCGQ13LM control via MQTT","description":"Integrate your Aqara MCCGQ13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Detection distance (enum)","slug":"detection-distance-enum","link":"#detection-distance-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710706169000},"filePathRelative":"devices/MCCGQ13LM.md"}')},610707:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(166252);const n=(0,i._)("h1",{id:"aqara-mccgq13lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#aqara-mccgq13lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Aqara MCCGQ13LM")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"MCCGQ13LM")],-1),r=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Door and window sensor P1")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"contact, battery, voltage, tamper, detection_distance, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MCCGQ13LM.png",alt:"Aqara MCCGQ13LM"})])],-1),u=(0,i._)("h2",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),h=(0,i._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, after starting the pairing process with the long press, keep short pressing the button approximately once a second until the interview process is finished.",-1),p=(0,i._)("h2",{id:"battery",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#battery","aria-hidden":"true"},"#"),(0,i.Uk)(" Battery")],-1),m=(0,i._)("p",null,"Uses a CR123A battery",-1),b=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="detection-distance-enum" tabindex="-1"><a class="header-anchor" href="#detection-distance-enum" aria-hidden="true">#</a> Detection distance (enum)</h3><p>The sensor will be considered &quot;off&quot; within the set distance. Please press the device button before setting. Value can be found in the published state on the <code>detection_distance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detection_distance&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance&quot;: NEW_VALUE}</code>. The possible values are: <code>10mm</code>, <code>20mm</code>, <code>30mm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),g={},v=(0,a(983744).Z)(g,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[o,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,i.w5)((()=>[(0,i.Uk)("Aqara")])),_:1})])]),l,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,m,(0,i.kq)(" Notes END: Do not edit below this line "),b])}]])}}]);