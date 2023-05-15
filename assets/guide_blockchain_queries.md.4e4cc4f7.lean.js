import{_ as c,o,c as i,C as e,I as s,V as t,a}from"./chunks/framework.7726510e.js";const d={},p={class:"warning custom-block"},u=e("p",{class:"custom-block-title"}," WARNING ",-1),h=e("p",null,"This query returns a large volume of data.",-1),g=[u,h];function y(l,r){return o(),i("div",p,g)}const n=c(d,[["render",y]]),m=t("",44),f=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Vec<Roles>")])],-1),b=e("p",null,[e("strong",null,"Details"),a(": Returns all roles registered as "),e("em",null,"global"),a(" (as opposed to "),e("em",null,"domain-scoped"),a(") in the blockchain.")],-1),A=t("",17),_=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Vec<Account>")])],-1),D=e("p",null,[e("strong",null,"Details"),a(": Finds all accounts registered globally in the blockchain.")],-1),k=t("",7),q=e("li",null,[e("p",null,[e("strong",null,"Parameters"),a(": "),e("code",null,"DomainId")])],-1),F=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Vec<Account>")])],-1),B=e("p",null,[e("strong",null,"Details"),a(": Returns all accounts that belong to a specific domain.")],-1),v=e("p",null,[a("Note that this returns the full accounts and not the "),e("code",null,"AccountId"),a(" collection.")],-1),P=t("",5),I=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Vec<Asset>")])],-1),T=e("p",null,[e("strong",null,"Details"),a(": Returns all known assets by value.")],-1),C=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,[a("You should note that this is not the same as "),e("code",null,"AssetDefinition"),a(". If you have one asset called e.g. "),e("code",null,"tea#wonderland"),a(" that belongs to every account on the blockchain, you will receive the aggregated value across all accounts, but not the information such as the type of the asset.")])],-1),w=e("h3",{id:"findallassetdefinitions",tabindex:"-1"},[e("code",null,"FindAllAssetDefinitions"),a(),e("a",{class:"header-anchor",href:"#findallassetdefinitions","aria-label":'Permalink to "`FindAllAssetDefinitions`"'},"​")],-1),R=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Vec<AssetDefinition>")])],-1),x=e("p",null,[e("strong",null,"Details"),a(": Returns all known asset definitions by value.")],-1),V=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"To reduce the load on the network, we store the definition of an asset separate from its instances. So if you want to know if an asset is mintable or what type is stored in it, you need to query the asset definition, rather than the asset itself.")],-1),S=t("",8),N=t("",2),K=t("",22),H=e("li",null,[e("p",null,[e("strong",null,"Parameters"),a(": "),e("code",null,"DomainId")])],-1),E=e("li",null,[e("p",null,[e("strong",null,"Returns"),a(": "),e("code",null,"Domain")])],-1),Q=e("p",null,[e("strong",null,"Details"),a(": Gets the domain corresponding to the given identifier.")],-1),W=t("",11),Y=t("",2),j=e("p",null,[e("strong",null,"Details"),a(": Returns the full set of transactions that an account has submitted throughout the existence of the blockchain.")],-1),G=t("",7),Z=t("",6),U=JSON.parse('{"title":"Queries","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/queries.md","lastUpdated":1684147028000}'),X={name:"guide/blockchain/queries.md"},z=Object.assign(X,{setup(l){return(r,M)=>(o(),i("div",null,[m,e("ul",null,[f,e("li",null,[b,s(n)])]),A,e("ul",null,[_,e("li",null,[D,s(n)])]),k,e("ul",null,[q,F,e("li",null,[B,v,s(n)])]),P,e("ul",null,[I,e("li",null,[T,s(n),C])]),w,e("ul",null,[R,e("li",null,[x,s(n),V])]),S,s(n),N,s(n),K,e("ul",null,[H,E,e("li",null,[Q,s(n)])]),W,e("ul",null,[Y,e("li",null,[j,s(n)])]),G,s(n),Z]))}});export{U as __pageData,z as default};
