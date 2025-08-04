const l=new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),n=(t,e=!1)=>{if(!e)return l.test(t);const s=t.split(".");for(const r of s)if(!n(r))return!1;return!0};export{n as i};
