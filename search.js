function search__window_sugg_show(){search_window_sugg.style.display="",search_window_sugg.dataset.show="true",search_window_sugg.classList.remove("animation__search_window_sugg_hide"),search_window_sugg.classList.add("animation__search_window_sugg_show")}function search__window_sugg_hide(){search_window_sugg.classList.remove("animation__search_window_sugg_show"),search_window_sugg.classList.add("animation__search_window_sugg_hide")}function search__go(){let e="https://ultab.pro/search/?q="+encodeURIComponent(search_form_input.value);open_url(e)}async function search__append_sugg(e){let s="https://www.google.com/complete/search?client=firefox&q="+encodeURIComponent(search_form_input.value),t=await fetch(s);if(t.ok){let s=await t.json();search_window_sugg.innerHTML="";for(let e=0;e<s[1].length;e++){let t=document.createElement("div");t.classList.add("search_window_sugg_item"),t.dataset.index=e,t.innerHTML='\n            <div>\n                <span class="material-icons">search</span>\n            </div>\n            <text>loading..</text>\n            ',search_window_sugg.appendChild(t),qs('.search_window_sugg_item[data-index="'+e+'"]>text').textContent=s[1][e]}e&&e()}}let search_btn_search=qs("#search_btn_search"),search_form_input=qs(".search_form_input"),search_btn_close=qs("#search_btn_close"),search_window_sugg=qs(".search_window_sugg");search_window_sugg.addEventListener("animationend",(function(e){e.target.classList.contains("search_window_sugg")&&"animation__search_window_sugg_hide"===e.animationName&&(search_window_sugg.style.display="none",search_window_sugg.dataset.show="false")})),document.addEventListener("mousedown",(function(e){e.target.matches(".search, .search *")||"true"===search_window_sugg.dataset.show&&search__window_sugg_hide()})),search_form_input.addEventListener("input",(function(){search_form_input.value?search__append_sugg((function(){search_form_input.value&&(search__window_sugg_show(),search_btn_close.style.display="")})):(search__window_sugg_hide(),search_btn_close.style.display="none")})),search_btn_search.addEventListener("click",(function(){search_form_input.value?search__go():search_form_input.focus()})),search_form_input.addEventListener("focus",(function(){search_form_input.value&&search__append_sugg((function(){search_form_input.value&&search__window_sugg_show()}))})),search_form_input.addEventListener("keydown",(function(e){"Enter"===e.key&&search_form_input.value&&search__go()})),search_btn_close.addEventListener("click",(function(){search__window_sugg_hide(),search_btn_close.style.display="none",search_form_input.value="",search_form_input.focus()})),document.addEventListener("keydown",(function(e){if("true"===search_window_sugg.dataset.show){function s(){search_form_input.blur();let e=qs(".search_window_sugg_item_select");if(e){let s=e.nextSibling;s&&(e.classList.remove("search_window_sugg_item_select"),s.classList.add("search_window_sugg_item_select"))}else{let e=qsAll(".search_window_sugg_item")[0];e&&e.classList.add("search_window_sugg_item_select")}}if("ArrowUp"===e.key&&function(){search_form_input.blur();let e=qs(".search_window_sugg_item_select");if(e){let s=e.previousSibling;s&&(e.classList.remove("search_window_sugg_item_select"),s.classList.add("search_window_sugg_item_select"))}else{let e=qsAll(".search_window_sugg_item");e.length>0&&(e=e[e.length-1],e.classList.add("search_window_sugg_item_select"))}}(),"ArrowDown"===e.key&&s(),!document.activeElement.classList.contains("search_form_input")){let t=qs(".search_window_sugg_item_select");if(t){let _=qs('.search_window_sugg_item[data-index="'+t.dataset.index+'"]>text').textContent;"Enter"===e.key&&(search_form_input.value=_,search__go()),"ArrowRight"===e.key&&(search_form_input.value=_,search__append_sugg((function(){s()})))}}}})),search_window_sugg.addEventListener("click",(function(e){if(e.target.classList.contains("search_window_sugg_item")){let s=qs('.search_window_sugg_item[data-index="'+e.target.dataset.index+'"]>text').textContent;search_form_input.value=s,search__go()}})),search_window_sugg.addEventListener("contextmenu",(function(e){if(e.target.classList.contains("search_window_sugg_item")){e.preventDefault();let s=qs('.search_window_sugg_item[data-index="'+e.target.dataset.index+'"]>text').textContent;search_form_input.value=s,search_form_input.focus()}})),search_window_sugg.addEventListener("mouseover",(function(e){if(e.target.classList.contains("search_window_sugg_item")){let s=qs(".search_window_sugg_item_select");s&&s.classList.remove("search_window_sugg_item_select"),e.target.classList.add("search_window_sugg_item_select")}})),search_window_sugg.addEventListener("mouseout",(function(e){if(e.target.classList.contains("search_window_sugg_item")){let e=qs(".search_window_sugg_item_select");e&&e.classList.remove("search_window_sugg_item_select")}})),search_form_input.focus();