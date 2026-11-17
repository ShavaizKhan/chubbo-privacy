'use strict';
const invite=inviteDetails(window.location.search);
document.getElementById(invite?'invite':'invalid').hidden=false;
if(invite){
 document.getElementById('code').textContent=invite.code;
 document.getElementById('open').href='chubbo://'+invite.kind+'?code='+encodeURIComponent(invite.code);
 document.getElementById('instructions').textContent=invite.kind==='referral'?'New here? Enter this referral code during setup.':'After installing, go to Friends → Add and enter this code.';
 document.getElementById('copy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(invite.code);document.getElementById('notice').textContent='Code copied.';}
  catch{document.getElementById('notice').textContent='Press and hold the code above to copy it.';}
 });
}
