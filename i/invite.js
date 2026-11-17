// Shared with the static invite page. No account or contact data in these URLs.
const INVITE_BASE_URL='https://shavaizkhan.github.io/chubbo-privacy/i/';
function inviteDetails(search){
 const params=new URLSearchParams(search),keys=[...params.keys()];
 if(keys.length!==1||!['r','f'].includes(keys[0]))return null;
 const key=keys[0],value=params.get(key);
 if(!/^[2-9A-HJ-NP-Z]{8}$/.test(value??''))return null;
 return {kind:key==='r'?'referral':'friend',code:'CHUB-'+value};
}
function publicInviteLink(code,kind='referral'){
 if(typeof code!=='string'||!/^CHUB-[2-9A-HJ-NP-Z]{8}$/.test(code)||!['referral','friend'].includes(kind))return null;
 return INVITE_BASE_URL+'?'+(kind==='referral'?'r':'f')+'='+code.slice(5);
}
function publicInviteCode(input,kind){
 try{const url=new URL(input),base=new URL(INVITE_BASE_URL);if(url.origin!==base.origin||url.pathname!==base.pathname||url.username||url.password||url.hash)return null;
 const details=inviteDetails(url.search);return details?.kind===kind?details.code:null;}catch{return null;}
}
if(typeof module!=='undefined')module.exports={INVITE_BASE_URL,inviteDetails,publicInviteLink,publicInviteCode};
