webpackJsonp([1],{"+FjK":function(t,e){},"/W/4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg",style:{backgroundImage:"url("+t.background+")"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"container col m10 s12 offset-m1 "},[i("my-header"),t._v(" "),i("my-main")],1)])])},s=[],n={render:a,staticRenderFns:s};e.a=n},"3SRC":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("div",{staticClass:"col s10 offset-s1 container"},[i("img",{attrs:{src:t.actorPicture,alt:""}}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"birthday"},[i("b",[t._v("Born at:")]),t._v(" "+t._s(t.birthday))]),t._v(" "),t.deathday?i("div",[i("b",[t._v("Died at:")]),t._v(" "+t._s(t.deathday))]):t._e(),t._v(" "),i("div",{staticClass:"bio"},[t._v(t._s(t.biography))])])])])},s=[],n={render:a,staticRenderFns:s};e.a=n},"4GOK":function(t,e){},G5sm:function(t,e,i){"use strict";e.a={name:"app"}},HCTz:function(t,e,i){"use strict";var a=i("dDoS"),s=i.n(a);e.a={name:"Header",data:function(){return{msg:"Welcome to Your Vue.js App",myinput:"",gottenID:null,suggestions:[],showSuggestions:!1}},computed:{url:function(){return"https://api.themoviedb.org/3/search/movie?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&query="+this.myinput+"&page=1&include_adult=true"}},watch:{url:function(t){var e=this;this.suggestions=[],this.axios.get(t).then(function(t){for(var i=t.data.results,a=0;a<5;a++)i[a]&&i[a].title&&e.suggestions.push({title:i[a].title,poster:"https://image.tmdb.org/t/p/w92"+i[a].poster_path,id:i[a].id})}),""===this.myinput?this.showSuggestions=!1:this.showSuggestions=!0}},methods:{search:function(){var t=this;this.axios.get(this.url).then(function(e){t.gottenID=e.data.results[0].id,console.log(t.gottenID),t.toMovie()})},toMovie:function(){console.log(this.gottenID),this.$router.push({name:"movie",params:{id:this.gottenID}})},closeSuggestions:function(){this.showSuggestions=!1,console.log(this.showSuggestions)},selectSuggestion:function(t){this.gottenID=t,this.toMovie()}},directives:{ClickOutside:s.a}}},MYa9:function(t,e){},MiD0:function(t,e,i){"use strict";var a=i("teIl"),s=i("s6+2");e.a={name:"index",components:{MyHeader:a.a,MyMain:s.a},data:function(){return{background:null,url:"https://api.themoviedb.org/3/movie/popular?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1"}},methods:{getPopular:function(){var t=this;this.axios.get(this.url).then(function(e){t.background="https://image.tmdb.org/t/p/original"+e.data.results[0].backdrop_path,console.log(e.data.results[0].backdrop_path)})}},created:function(){this.getPopular()}}},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("ukUq"),n=i("YaEn"),o=i("mtWM"),r=i.n(o),c=i("Rf8U"),l=i.n(c);a.a.use(l.a,r.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<Movies/>",components:{Movies:s.a}})},QMkO:function(t,e,i){"use strict";function a(t){i("tpPJ")}var s=i("safg"),n=i("ur1A"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,"data-v-30be0021",null);e.a=c.exports},QPEj:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Main"}},[i("nav",[i("div",{staticClass:"nav-wrapper"},[i("ul",[i("li",{class:{active:t.filter.popular},on:{click:t.changeFilter}},[i("a",{attrs:{href:"#"}},[t._v("Popular")])]),t._v(" "),i("li",{class:{active:t.filter.upcoming},on:{click:t.changeFilter}},[i("a",{attrs:{href:"#"}},[t._v("Upcoming")])]),t._v(" "),i("li",{class:{active:t.filter.inTheaters},on:{click:t.changeFilter}},[i("a",{attrs:{href:"#"}},[t._v("In Theaters")])])])])]),t._v(" "),i("div",{staticClass:"movies"},t._l(t.selected,function(e,a){return i("div",{key:a,staticClass:"movie",style:{background:"url("+e.poster+")"},on:{click:function(i){t.toMovie(e.id)}}})}))])},s=[],n={render:a,staticRenderFns:s};e.a=n},Uhku:function(t,e,i){"use strict";e.a={name:"Main",data:function(){return{filter:{popular:!0,upcoming:!1,inTheaters:!1},urls:{popular:"https://api.themoviedb.org/3/movie/popular?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1",upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1",inTheaters:"https://api.themoviedb.org/3/movie/now_playing?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1"},popular:[],upcoming:[],inTheaters:[],selected:[]}},computed:{},methods:{changeFilter:function(t){switch(t.target.innerHTML){case"Popular":this.filter.popular=!0,this.filter.upcoming=!1,this.filter.inTheaters=!1,this.selected=this.popular;break;case"Upcoming":this.filter.popular=!1,this.filter.upcoming=!0,this.filter.inTheaters=!1,this.selected=this.upcoming;break;case"In Theaters":this.filter.popular=!1,this.filter.upcoming=!1,this.filter.inTheaters=!0,this.selected=this.inTheaters}},fetchData:function(){var t=this;this.axios.get(this.urls.popular).then(function(e){t.infoFromFetchedData("popular",e.data.results)}),this.axios.get(this.urls.upcoming).then(function(e){t.infoFromFetchedData("upcoming",e.data.results)}),this.axios.get(this.urls.inTheaters).then(function(e){t.infoFromFetchedData("inTheaters",e.data.results)})},infoFromFetchedData:function(t,e){var i=this;e.forEach(function(e){i[t].push({id:e.id,title:e.title,poster:"https://image.tmdb.org/t/p/w342"+e.poster_path,releaseDate:e.release_date})})},toMovie:function(t){this.$router.push({name:"movie",params:{id:t}})}},created:function(){this.fetchData(),this.selected=this.popular}}},YaEn:function(t,e,i){"use strict";var a=i("7+uW"),s=i("/ocq"),n=i("dAjm"),o=i("QMkO"),r=i("fzUq");a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"index",component:n.a},{path:"/movie/:id",name:"movie",component:o.a},{path:"/actor/:id",name:"actorDetails",component:r.a}]})},a1a8:function(t,e){},dAjm:function(t,e,i){"use strict";function a(t){i("MYa9")}var s=i("MiD0"),n=i("/W/4"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,"data-v-62ee9033",null);e.a=c.exports},fGZS:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"green-text text-accent-1 ",attrs:{id:"header"}},[i("h1",{staticClass:"center-align"},[t._v("Movies")]),t._v(" "),i("div",{staticClass:"row"},[i("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.search(e)}}},[i("div",{staticClass:"input-field col m6 s12 offset-m3 myinp"},[i("input",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSuggestions,expression:"closeSuggestions"},{name:"model",rawName:"v-model",value:t.myinput,expression:"myinput"}],staticClass:"validate green-text text-accent-1",attrs:{autocomplete:"off",id:"search",type:"text"},domProps:{value:t.myinput,value:t.myinput},on:{input:function(e){e.target.composing||(t.myinput=e.target.value)}}}),t._v(" "),i("label",{attrs:{for:"search"}},[t._v("Search movie")]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.showSuggestions?i("ul",t._l(t.suggestions,function(e){return i("li",{key:e.id,on:{click:function(i){t.selectSuggestion(e.id)}}},[i("img",{attrs:{src:e.poster,width:"70px",height:"100px",alt:""}}),i("div",{staticClass:"titleSuggestion"},[t._v(t._s(e.title))])])})):t._e()]),t._v(" "),t._m(0)],1)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit",name:"action"}},[t._v("Search\n            "),i("i",{staticClass:"material-icons right"},[t._v("send")])])}],n={render:a,staticRenderFns:s};e.a=n},fzUq:function(t,e,i){"use strict";function a(t){i("+FjK")}var s=i("j497"),n=i("3SRC"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,"data-v-ea83f460",null);e.a=c.exports},j497:function(t,e,i){"use strict";e.a={data:function(){return{detailsURL:"https://api.themoviedb.org/3/person/"+this.$route.params.id+"?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US",biography:null,birthday:null,deathday:null,name:null,actorPicture:null}},methods:{fetchData:function(){var t=this;this.axios.get(this.detailsURL).then(function(e){console.log(e);var i=e.data;t.biography=i.biography,t.deathday=i.deathday,t.birthday=i.birthday,t.name=i.name,t.actorPicture="https://image.tmdb.org/t/p/h632"+i.profile_path})}},created:function(){this.fetchData()}}},"s6+2":function(t,e,i){"use strict";function a(t){i("4GOK")}var s=i("Uhku"),n=i("QPEj"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,"data-v-064aaab2",null);e.a=c.exports},safg:function(t,e,i){"use strict";var a=i("/kJX");i.n(a);e.a={data:function(){return{urlToGetMovie:"https://api.themoviedb.org/3/movie/"+this.$route.params.id+"?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&append_to_response=videos,images,credits&include_image_language=en,null",movieInfo:{poster:null,title:null,overview:null,releaseDate:null,runtime:null,voteAverage:null,voteCount:null,revenue:null,budget:null,genres:null,homepage:null,originalLanguage:null,backdrop:null,directors:null,writers:null,directorsOfPhotography:null,composers:null,cast:[],backdrops:[],posters:[],videos:[]}}},methods:{fetchData:function(){var t=this;this.axios.get(this.urlToGetMovie).then(function(e){var i=e.data;console.log(i),t.movieInfo.poster="https://image.tmdb.org/t/p/w780"+i.poster_path,t.movieInfo.title=i.title,t.movieInfo.releaseDate=i.release_date,t.movieInfo.overview=i.overview,t.movieInfo.runtime=parseInt(i.runtime/60)+"h "+i.runtime%60+"m",t.movieInfo.voteAverage=i.vote_average,t.movieInfo.voteCount=i.vote_count,t.movieInfo.revenue=i.revenue.toLocaleString()+" $",t.movieInfo.budget=i.budget.toLocaleString()+" $",t.movieInfo.genres=i.genres.map(function(t){return t.name}).join(", "),t.movieInfo.homepage=i.homepage,t.movieInfo.originalLanguage=i.original_language,t.movieInfo.backdrop="https://image.tmdb.org/t/p/original"+i.backdrop_path;var a="",s="",n="",o="";i.credits.crew.map(function(t){"Director"===t.job&&(""===a?a=t.name:a+=", "+t.name),"Writing"===t.department&&-1===s.indexOf(t.name)&&(""===s?s=t.name:s+=", "+t.name),"Director of Photography"===t.job&&(""===n?n=t.name:n+=", "+t.name),"Original Music Composer"!==t.job&&"Music"!==t.job||(""===o?o=t.name:o+=", "+t.name)}),t.movieInfo.directors=a,t.movieInfo.writers=s,t.movieInfo.directorsOfPhotography=n,t.movieInfo.composers=o,i.credits.cast.forEach(function(e){e.profile_path&&t.movieInfo.cast.push({character:e.character,name:e.name,profile:"https://image.tmdb.org/t/p/w185"+e.profile_path,id:e.id})}),i.images.backdrops.forEach(function(e){t.movieInfo.backdrops.push("https://image.tmdb.org/t/p/w300"+e.file_path)}),i.images.posters.forEach(function(e){t.movieInfo.posters.push("https://image.tmdb.org/t/p/w185"+e.file_path)}),i.videos.results.map(function(e){t.movieInfo.videos.push("https://www.youtube.com/embed/"+e.key)}),console.log(t.movieInfo)})},toActorDetails:function(t){console.log("ETO ID = "+t),this.$router.push({name:"actorDetails",params:{id:t}})}},created:function(){this.fetchData()},components:{Carousel:a.Carousel,Slide:a.Slide}}},teIl:function(t,e,i){"use strict";function a(t){i("a1a8")}var s=i("HCTz"),n=i("fGZS"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,"data-v-74a2667c",null);e.a=c.exports},tpPJ:function(t,e){},"uD+q":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],n={render:a,staticRenderFns:s};e.a=n},ukUq:function(t,e,i){"use strict";function a(t){i("z+tN")}var s=i("G5sm"),n=i("uD+q"),o=i("VU/8"),r=a,c=o(s.a,n.a,!1,r,null,null);e.a=c.exports},ur1A:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg row",style:{backgroundImage:"url("+t.movieInfo.backdrop+")"}},[i("div",{staticClass:"col s10 offset-s1 container"},[i("div",{staticClass:"mainInfo"},[i("a",{staticClass:" poster",attrs:{target:"_blank",href:t.movieInfo.homepage}},[i("img",{attrs:{src:t.movieInfo.poster,alt:"poster",width:"400"}})]),t._v(" "),i("div",{staticClass:"info"},[i("h1",[t._v(t._s(t.movieInfo.title))]),t._v(" "),i("ul",[i("li",[t._m(0),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(" "+t._s(t.movieInfo.genres))])]),t._v(" "),i("li",[t._m(1),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.directors))])]),t._v(" "),i("li",[t._m(2),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.writers))])]),t._v(" "),t.movieInfo.directorsOfPhotography?i("li",[t._m(3),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.directorsOfPhotography))])]):t._e(),t._v(" "),i("li",[t._m(4),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.composers))])]),t._v(" "),i("li",[t._m(5),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.budget))])]),t._v(" "),i("li",[t._m(6),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.revenue))])]),t._v(" "),i("li",[t._m(7),t._v(" "),i("div",{staticClass:"infoValue"},[t._v(t._s(t.movieInfo.runtime))])])])])]),t._v(" "),i("div",{staticClass:"additionalInfo"},[i("div",{staticClass:"overview"},[t._v(t._s(t.movieInfo.overview))]),t._v(" "),t.movieInfo.cast.length?i("div",[i("div",{staticClass:"word"},[t._v("Cast")]),t._v(" "),t.movieInfo.cast?i("carousel",{attrs:{perPageCustom:[[1220,5],[970,4],[300,3]],scrollPerPage:!0}},t._l(t.movieInfo.cast,function(e,a){return i("slide",{key:a,staticClass:"carousel-item"},[i("div",{staticClass:"myImgAndVid"},[i("img",{staticClass:"myImg",attrs:{title:e.name+" - "+e.character,src:e.profile,alt:""},on:{click:function(i){t.toActorDetails(e.id)}}})])])})):t._e()],1):t._e(),t._v(" "),t.movieInfo.posters.length?i("div",[i("div",{staticClass:"word"},[t._v("Posters")]),t._v(" "),t.movieInfo.posters?i("carousel",{attrs:{perPageCustom:[[1220,5],[970,4],[300,3]],scrollPerPage:!0}},t._l(t.movieInfo.posters,function(t,e){return i("slide",{key:e,staticClass:"carousel-item"},[i("div",{staticClass:"myImgAndVid"},[i("img",{staticClass:"myImg",attrs:{src:t,alt:""}})])])})):t._e()],1):t._e(),t._v(" "),t.movieInfo.backdrops.length?i("div",[i("div",{staticClass:"word"},[t._v("Backdrops")]),t._v(" "),i("carousel",{attrs:{perPageCustom:[[100,3]],scrollPerPage:!0}},t._l(t.movieInfo.backdrops,function(t,e){return i("slide",{key:e,staticClass:"carousel-item images"},[i("div",{staticClass:"myImgAndVid"},[i("div",{staticClass:"myBackdrop"},[i("img",{attrs:{src:t,alt:""}})])])])}))],1):t._e(),t._v(" "),t.movieInfo.videos.length?i("div",[i("div",{staticClass:"word"},[t._v("Videos")]),t._v(" "),i("carousel",{attrs:{perPage:2,scrollPerPage:!0}},t._l(t.movieInfo.videos,function(t,e){return i("slide",{key:e},[i("div",{staticClass:"myImgAndVid"},[i("iframe",{attrs:{src:t,frameborder:"10",width:"500",height:"250",allowfullscreen:""}})])])}))],1):t._e()])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Genre:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Director:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Writers:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Cinematographer:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Composers:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Budget:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Revenue:   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoName"},[i("pre",[t._v("Runtime:   ")])])}],n={render:a,staticRenderFns:s};e.a=n},"z+tN":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b243e961011ce292ef33.js.map