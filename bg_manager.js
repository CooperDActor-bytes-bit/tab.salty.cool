async function bg_manager__set(e){let g=await fetch(e);if(g.ok){let e=await g.blob(),n=URL.createObjectURL(e);bg.style.backgroundImage="url('"+n+"')"}}function bg_manager(){chromels("get","bg_src",!1,(function(e){e?bg_manager__set(e):(e="./src/bg.jpg",img_resize(e,window.screen.width,!1,(function(e){e&&chromels("set","bg_src",e,(function(){bg_manager()}))})))}))}let bg=qs(".bg");bg_manager();