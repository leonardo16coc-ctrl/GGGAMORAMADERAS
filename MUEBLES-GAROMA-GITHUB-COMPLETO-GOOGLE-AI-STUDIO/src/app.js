const GAROMA_IMAGES = {"alacena-gris":"./media/alacena-gris.webp","alacena-gris-cerrada-real":"./media/alacena-gris-cerrada-real.webp","alacena-negra-abierta-real":"./media/alacena-negra-abierta-real.webp","alacena-negra-cerrada-real":"./media/alacena-negra-abierta-real.webp","alacena-rivera-cerrada-real":"./media/alacena-gris.webp","armario-negro":"./media/alacena-negra-abierta-real.webp","armario-rivera":"./media/alacena-gris.webp","coleccion-nogal":"./media/coleccion-nogal.webp","organizador-5-gris-real":"./media/organizador-5-gris-real.webp","organizador-9-gris-real":"./media/organizador-9-gris-real.webp","organizador-marmol-frontal-real":"./media/organizador-marmol-frontal-real.webp","organizador-negro-frontal-real":"./media/organizador-negro-frontal-real.webp","ropero-blanco":"./media/ropero-blanco.webp","ropero-gris-abierto-real":"./media/ropero-blanco.webp","ropero-gris-cerrado-real":"./media/alacena-gris-cerrada-real.webp"};

'use strict';

const images = base => GAROMA_IMAGES[base] || "";
const colors = {
  'Blanco': {solid:'#f7f7f3'},
  'Gris': {solid:'#8f9390',pattern:'repeating-linear-gradient(115deg,#999b98 0px,#7f8784 2px,#a4a8a5 4px)'},
  'Negro': {solid:'#222624'},
  'Rivera': {solid:'#ab7148',pattern:'repeating-linear-gradient(100deg,#99603b 0px,#b27e53 4px,#a26d48 7px)'},
  'Nogal': {solid:'#79523b',pattern:'repeating-linear-gradient(90deg,#79523b 0px,#996d4d 3px,#68442e 7px)'},
  'Parota': {solid:'#a5683f',pattern:'repeating-linear-gradient(92deg,#b27547 0px,#8e532f 3px,#bc8053 6px)'},
  'Mármol': {solid:'#f1f0ec',pattern:'repeating-linear-gradient(130deg,#e5e6e5 0px,#fafafa 9px,#dddcd9 10px,#f8f8f7 12px)'}
};

const GAROMA_EXTRA_VIEWS = {"alacenaNegra":"./media/foto-estudio-14.webp","alacenaSlimGris":"./media/foto-estudio-15.webp","alacena2000":"./media/foto-estudio-16.webp","libreroNogal":"./media/foto-estudio-17.webp","org5gris":"./media/foto-estudio-18.webp","org5":"./media/foto-estudio-19.webp","org9":"./media/foto-estudio-20.webp","roperoBlanco":"./media/foto-estudio-21.webp","alacena1900":"./media/foto-estudio-16.webp"};
const products = [
  {id:'org5',name:'Organizador de 5 espacios',category:'organizadores',sub:'Organizadores',price:1150,image:images('organizador-marmol-frontal-real'),wide:true,badge:'5 espacios',description:'Diseño funcional con presencia elegante para ordenar recámara, oficina o vestidor.',colors:['Mármol','Blanco','Rivera','Gris','Negro'],details:'Organizador abierto de 5 espacios. Disponible en varios acabados; confirma existencias, medidas y tiempos por WhatsApp.'},
  {id:'org9',name:'Organizador de 9 espacios',category:'organizadores',sub:'Organizadores',price:1250,image:images('organizador-9-gris-real'),badge:'Gran capacidad',description:'Ideal para ropa doblada, cajas, accesorios y decoración, con estética moderna.',colors:['Gris','Nogal','Blanco','Parota','Mármol','Negro'],details:'Organizador abierto de 9 espacios. Perfecto para separar prendas, accesorios y objetos personales.'},
  {id:'org5gris',name:'Organizador vertical de 5 espacios',category:'organizadores',sub:'Organizadores',price:null,image:images('organizador-5-gris-real'),badge:'Modelo Garoma',description:'Formato vertical con gran utilidad para espacios compactos.',colors:['Gris','Blanco','Mármol','Negro'],details:'Modelo vertical tipo librero de 5 espacios. Solicita precio según acabado y disponibilidad.'},
  {id:'orgNegro',name:'Organizador negro de 9 espacios',category:'organizadores',sub:'Organizadores',price:null,image:images('organizador-negro-frontal-real'),badge:'Acabado negro',description:'Una propuesta sobria y moderna para interiores contemporáneos.',colors:['Negro','Gris','Blanco'],details:'Imagen ilustrativa: solicita fotografía del acabado negro antes de confirmar. Organizador alto en acabado negro. Ideal para closet, vestidor o recámara.'},
  {id:'alacena1900',dimensions:[180,60,30],name:'Alacena 2 puertas',category:'alacenas',sub:'Alacenas',price:1900,image:images('armario-rivera'),badge:'A tu estilo',description:'Alto 180 × ancho 60 × fondo 30 cm. Acabado y color a elegir.',colors:['Rivera','Blanco','Gris','Mármol','Negro'],details:'Imagen de estudio referencial del modelo; confirma el acabado Rivera por WhatsApp. Alacena con puertas, entrepaños interiores y jaladeras. Medidas anunciadas: 180 cm de alto, 60 cm de ancho y 30 cm de fondo.'},
  {id:'alacena2000',dimensions:[180,60,30],name:'Alacena con entrepaños',category:'alacenas',sub:'Alacenas',price:2000,image:images('alacena-gris'),description:'Alto 180 × ancho 60 × fondo 30 cm. Para tener todo en orden.',colors:['Gris','Blanco','Rivera','Mármol','Negro'],details:'Alacena de dos puertas con organización interior de entrepaños. Medidas anunciadas: 180 × 60 × 30 cm.'},
  {id:'alacenaSlimGris',name:'Alacena slim gris',category:'alacenas',sub:'Alacenas',price:null,image:images('alacena-gris-cerrada-real'),badge:'Modelo Garoma',description:'Modelo alto y compacto con puertas y repisas interiores.',colors:['Gris','Blanco','Negro','Rivera'],details:'Alacena slim en acabado gris. Solicita precio, medidas exactas y existencias por WhatsApp.'},
  {id:'alacenaSlimNegra',name:'Alacena slim negra',category:'alacenas',sub:'Alacenas',price:null,image:images('alacena-negra-cerrada-real'),badge:'Minimalista',description:'Línea limpia y elegante en acabado negro mate.',colors:['Negro','Gris','Blanco'],details:'Alacena vertical de dos puertas con entrepaños interiores. Ideal para organización del hogar.'},
  {id:'alacenaSlimRivera',name:'Alacena slim rivera',category:'alacenas',sub:'Alacenas',price:null,image:images('alacena-rivera-cerrada-real'),badge:'Acabado madera',description:'Textura cálida tipo madera para espacios modernos y acogedores.',colors:['Rivera','Nogal','Parota','Blanco'],details:'Alacena vertical con repisas interiores y jaladeras metálicas. Pide medidas y precio por WhatsApp.'},
  {id:'roperoGris',name:'Ropero con cajonera',category:'roperos',sub:'Roperos',price:null,image:images('ropero-gris-cerrado-real'),badge:'A medida',description:'Distribución funcional con puertas y cajones para aprovechar cada centímetro.',colors:['Gris','Blanco','Negro','Nogal'],details:'Modelo mostrado con tres zonas verticales, puertas, cajones y espacios para colgar ropa. Solicita cotización según tus medidas.'},
  {id:'roperoGrisAbierto',name:'Ropero gris abierto',category:'roperos',sub:'Roperos',price:null,image:images('ropero-gris-abierto-real'),badge:'Interior funcional',description:'Visualiza su interior con barras, repisas y cajones listos para organizar.',colors:['Gris','Blanco','Negro','Nogal'],details:'Imagen de estudio ilustrativa de ropero con organización interior. Versión abierta del ropero gris para mostrar distribución interior. Solicita cotización según diseño y medidas.'},
  {id:'roperoBlanco',name:'Ropero blanco multifunción',category:'roperos',sub:'Roperos',price:null,image:images('ropero-blanco'),description:'Barras, entrepaños y cajones para aprovechar cada centímetro.',colors:['Blanco','Gris','Rivera','Negro'],details:'Ropero mostrado en acabado blanco con espacio para colgar, varios entrepaños y cajones. Se cotiza según diseño y medidas.'},
  {id:'armarioNegro',name:'Armario de 2 puertas',category:'roperos',sub:'Roperos',price:null,image:images('armario-negro'),description:'Estilo minimalista con puertas altas y jaladeras metálicas.',colors:['Negro','Blanco','Gris','Rivera'],details:'Armario vertical con dos puertas y jaladeras metálicas. Confirma dimensiones, distribución y precio por WhatsApp.'},
  {id:'libreroNogal',name:'Librero modular en nogal',category:'organizadores',sub:'Organizadores',price:null,image:images('coleccion-nogal'),badge:'Diseño modular',description:'Módulos abiertos en tono cálido para crear una pared de organización.',colors:['Nogal','Rivera','Gris'],details:'Librero modular abierto. Solicita medidas, configuraciones, disponibilidad y precio por WhatsApp.'},
  {id:'zapateraMedida',name:'Zapatera a medida para espacios pequeños',category:'zapateras',sub:'Zapateras',price:null,image:images('organizador-5-gris-real'),badge:'Medidas a elección',description:'Zapatera personalizada para aprovechar un rincón pequeño. Comparte alto, ancho y fondo.',colors:['Gris','Blanco','Rivera','Negro'],details:'Modelo de zapatera bajo cotización. La imagen es una referencia de organizador vertical, no un producto con características cerradas. Compártenos el alto, ancho, fondo y capacidad deseada para definir diseño y precio.'},
  {id:'alacenaNegra',name:'Alacena negra con entrepaños',category:'alacenas',sub:'Alacenas',price:null,image:images('alacena-negra-abierta-real'),badge:'Diseño a medida',description:'Almacenamiento vertical con entrepaños y elegancia minimalista.',colors:['Negro','Gris','Blanco'],details:'Mueble vertical negro de puertas y entrepaños. Confirma la distribución, dimensiones y precio por WhatsApp.'}
];
const pById = Object.fromEntries(products.map(p=>[p.id,p]));
const $ = sel => document.querySelector(sel);
const money = value => `$${Number(value).toLocaleString('es-MX')} MXN`;
const getStore = (key, fallback) => {try { const data=JSON.parse(localStorage.getItem(key)); return data ?? fallback; } catch(e) {return fallback;} };
const setStore = (key, val) => {try {localStorage.setItem(key,JSON.stringify(val));}catch(e) {}};
const storedCart = getStore('garoma_cart_v1', []);
let cart = (Array.isArray(storedCart) ? storedCart : []).filter(x=>x && pById[x.id] && pById[x.id].price && Number.isInteger(x.qty) && x.qty > 0 && x.qty <=99 && pById[x.id].colors.includes(x.color));
const storedFavorites = getStore('garoma_favorites_v1', []);
let favorite = Array.isArray(storedFavorites) ? storedFavorites : [];
let chosenColors = {};
let currentCategory = 'todos';
let currentProduct = null;
let modalColor = '';
let modalQty = 1;
let activeProductPhoto=0;
let toastTimer;
let deliveryPin = null; // Only set when user explicitly chooses a location
let activeMaps = {};
let activeMarkers = {};


function colorMarkup(color,selected=false,label=false){const c=colors[color]??colors.Gris;const bg=c.pattern||c.solid;return `<span class="color-dot ${selected?'selected':''}" style="background:${bg}" title="${color}" ${label?'':'aria-hidden="true"'}></span>`;}
function colorsForProduct(p){
 const choice=chosenColors[p.id]||p.colors[0];
 return p.colors.slice(0,5).map(c=>`<button type="button" class="color-dot ${c===choice?'selected':''}" style="background:${colors[c].pattern||colors[c].solid}" aria-label="Seleccionar color ${c}" title="${c}" data-color="${c}" data-product="${p.id}"></button>`).join('')+(p.colors.length>5?`<span class="more-colors">+${p.colors.length-5}</span>`:'');
}
function productMeasurements(p){
 if(Array.isArray(p.dimensions)&&p.dimensions.length===3){const [a,b,f]=p.dimensions;return {label:`${a} × ${b} × ${f} cm`,text:`Alto ${a} cm · Ancho ${b} cm · Fondo ${f} cm`,known:true};}
 return {label:'Medidas por confirmar',text:'Pide alto, ancho y fondo exactos por WhatsApp',known:false};
}
function requestMeasurements(id){
 const p=pById[id];if(!p)return;
 const dims=productMeasurements(p);
 whatsApp(`Hola, me interesa *${p.name}*. Antes de comprar, ¿me confirman las medidas exactas de *alto, ancho y fondo* y disponibilidad? ${dims.known?`En su sitio aparece: ${dims.text}. ¿Me las validan?`:''} Gracias.`);
}
function cardMarkup(p){
 const f=favorite.includes(p.id);const m=productMeasurements(p);
 return `<article class="product-card" data-id="${p.id}">
   <div class="card-image ${p.wide?'wide-product':''}" data-detail="${p.id}" tabindex="0" role="button" aria-label="Ver detalles de ${p.name}"><img loading="lazy" src="${p.image}" alt="${p.name} de Muebles Garoma">
    ${p.badge?`<span class="product-tag ${p.badge==='A medida'?'soft':''}">${p.badge}</span>`:''}
    <button type="button" class="favorite-button ${f?'is-favorite':''}" data-favorite="${p.id}" aria-label="${f?'Quitar de favoritos':'Añadir a favoritos'}"><svg class="ico"><use href="#i-heart"/></svg></button>
   </div>
   <div class="card-body"><span class="card-category">${p.sub}</span><h3 class="card-title">${p.name}</h3><p class="card-desc">${p.description}</p>
    <div class="product-measurements ${m.known?'known':'pending'}"><span class="measure-label">MEDIDAS · ALTO × ANCHO × FONDO</span><strong>${m.label}</strong>${m.known?`<small>${m.text}</small>`:`<button type="button" class="measure-request" data-measures="${p.id}">📏 Consultar medidas exactas →</button>`}</div>
    <div class="color-choice" aria-label="Colores disponibles">${colorsForProduct(p)}</div>
    <div class="product-purchase"><div class="card-price">${p.price?`<strong>${money(p.price).replace(' MXN','')}</strong><span>MXN · sin envío</span>`:`<strong class="quote-text">Precio a cotizar</strong><span>Según medidas y diseño</span>`}</div>
    <button type="button" class="card-action" data-action="${p.price?'add':'quote'}" data-product="${p.id}">${p.price?`<svg class="ico"><use href="#i-plus"/></svg> Añadir`:`Cotizar <svg class="ico"><use href="#i-arrow"/></svg>`}</button></div>
    <button type="button" class="cod-card-button" data-cod="${p.id}" aria-label="${p.price?'Comprar':'Consultar'} ${p.name} contra entrega">🚚 ${p.price?'Comprar contra entrega':'Consultar contra entrega'} <span aria-hidden="true">→</span></button>
   </div></article>`;
}
function renderProducts(){
 let list=products.filter(p=>currentCategory==='todos'||p.category===currentCategory);
 const q=$('#productSearch').value.trim().toLocaleLowerCase('es-MX');
 if(q)list=list.filter(p=>`${p.name} ${p.sub} ${p.description} ${p.details}`.toLocaleLowerCase('es-MX').includes(q));
 const sort=$('#sortProducts').value;
 if(sort==='price-asc')list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
 else if(sort==='price-desc')list.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
 $('#productsGrid').innerHTML=list.map(cardMarkup).join('');
 $('#resultsCount').textContent=`${list.length} producto${list.length!==1?'s':''}`;
 $('#noResults').hidden=list.length!==0;
}
function saveCart(){setStore('garoma_cart_v1',cart);renderCart();}
function addToCart(id,color,qty=1){
 const p=pById[id];if(!p||!p.price)return;
 const c=p.colors.includes(color)?color:p.colors[0];
 const item=cart.find(x=>x.id===id&&x.color===c);
 if(item)item.qty=Math.min(99,item.qty+qty); else cart.push({id,color:c,qty});
 saveCart();toast(`${p.name} añadido al carrito`);
}
function renderCart(){
 const count=cart.reduce((n,x)=>n+x.qty,0);
 const total=cart.reduce((n,x)=>n+pById[x.id].price*x.qty,0);
 $('#cartCount').textContent=count;
 $('#drawerCartCount').textContent=`(${count})`;
 $('#cartSubtotal').textContent=money(total);
 $('#cartItems').innerHTML=cart.length?cart.map((x,i)=>{const p=pById[x.id];return `<div class="cart-item"><img src="${p.image}" alt="${p.name}" loading="lazy"><div><h3>${p.name}</h3><p>Color: ${x.color}</p><strong>${money(p.price*x.qty)}</strong><div class="qty-control"><button type="button" data-cart-change="-1" data-index="${i}" aria-label="Reducir cantidad"><svg class="ico"><use href="#i-minus"/></svg></button><span>${x.qty}</span><button type="button" data-cart-change="1" data-index="${i}" aria-label="Aumentar cantidad"><svg class="ico"><use href="#i-plus"/></svg></button></div></div><button class="remove-item" data-remove="${i}" aria-label="Eliminar ${p.name}"><svg class="ico"><use href="#i-x"/></svg></button></div>`;}).join(''):`<div class="cart-empty"><svg class="ico"><use href="#i-bag"/></svg><h3>Tu carrito está vacío</h3><p>Encuentra un mueble que te guste y agrégalo para hacer tu pedido.</p><button type="button" class="btn primary" id="goCatalog">Explorar catálogo</button></div>`;
 $('#checkoutButton').disabled=!cart.length;
 $('#clearCart').hidden=!cart.length;
}
function toggleCart(open){
 const drawer=$('#cartDrawer');
 drawer.classList.toggle('open',open);
 drawer.setAttribute('aria-hidden',String(!open));
 $('#drawerBackdrop').hidden=!open;
 document.body.classList.toggle('no-scroll',open||!!document.querySelector('.modal-backdrop:not([hidden])'));
 if(open)$('#closeCart').focus();
}
function openModal(id){
 toggleCart(false);
 const modal=document.getElementById(id);modal.hidden=false;
 document.body.classList.add('no-scroll');
 const btn=modal.querySelector('[data-close]');if(btn)btn.focus();
}
function closeModal(id){
 document.getElementById(id).hidden=true;
 document.body.classList.toggle('no-scroll',$('#cartDrawer').classList.contains('open')||!!document.querySelector('.modal-backdrop:not([hidden])'));
}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2750);}
function whatsApp(text){const url=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;window.open(url,'_blank','noopener,noreferrer');}
function buyContraEntrega(id,color,qty=1){
 const p=pById[id];if(!p)return;
 if(!p.price){
   whatsApp(`Hola, quiero pedir *${p.name}* en color *${color}*. ¿Se puede comprar con *pago contra entrega* en mi zona? ¿Me confirman el precio, las medidas (alto, ancho y fondo), el envío y disponibilidad?`);
   return;
 }
 addToCart(id,color,qty);
 const modal=document.getElementById('productModal');
 if(modal && !modal.hidden) closeModal('productModal');
 checkout();
}
function openContraEntrega(){
 if(cart.length){checkout();return;}
 document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth',block:'start'});
 toast('Selecciona un mueble y pulsa 🚚 Comprar contra entrega');
}
function quoteProduct(id,color){const p=pById[id];whatsApp(`Hola, me interesa cotizar este mueble de Muebles Garoma:\n\n*${p.name}*\nColor de preferencia: ${color}\n\n¿Me comparten el precio y las medidas exactas (alto, ancho y fondo) y la disponibilidad? Gracias.`);}
function productPhotos(p){
 const pics=[p.image];
 if(GAROMA_EXTRA_VIEWS[p.id] && GAROMA_EXTRA_VIEWS[p.id]!==p.image) pics.push(GAROMA_EXTRA_VIEWS[p.id]);
 // Same-design complementary views from our studio image set.
 if(p.id==='roperoGris' && pById.roperoGrisAbierto) pics.push(pById.roperoGrisAbierto.image);
 if(p.id==='roperoGrisAbierto' && pById.roperoGris) pics.push(pById.roperoGris.image);
 if(p.id==='alacenaSlimGris' && pById.alacena2000) pics.push(pById.alacena2000.image);
 if(p.id==='alacenaSlimNegra' && pById.alacenaNegra) pics.push(pById.alacenaNegra.image);
 return pics;
}
function renderProductModal(){
 const p=pById[currentProduct];if(!p)return;
 const gallery=productPhotos(p);const m=productMeasurements(p);activeProductPhoto=Math.min(activeProductPhoto,gallery.length-1);
 $('#productModalContent').innerHTML=`<div class="detail-gallery"><div class="modal-product-photo"><img src="${gallery[activeProductPhoto]}" alt="${p.name} — vista ${activeProductPhoto+1} de ${gallery.length}"></div><div class="product-photo-thumbs" aria-label="Diferentes vistas de ${p.name}">${gallery.map((src,i)=>`<button type="button" class="product-photo-thumb ${i===activeProductPhoto?'active':''}" data-photo-view="${i}" aria-label="Ver foto ${i+1} del producto" aria-pressed="${i===activeProductPhoto}"><img src="${src}" alt="Vista ${i+1} de ${p.name}"></button>`).join('')}</div><span class="product-gallery-disclaimer">Imágenes digitales de estudio. Confirma colores, medidas y distribución por WhatsApp.</span></div><div class="modal-product-info"><span class="card-category">${p.sub}</span><h2>${p.name}</h2><p>${p.details}</p><div class="modal-measurements"><span>MEDIDAS DEL MUEBLE · ALTO × ANCHO × FONDO</span><strong>${m.known?m.text:'Medidas por confirmar'}</strong>${!m.known?`<button type="button" class="measure-request" data-measures="${p.id}">📏 Preguntar medidas por WhatsApp →</button>`:'<small>Confirma medidas antes de hacer tu pedido.</small>'}</div><div class="modal-product-price">${p.price?money(p.price):'Precio a cotizar'}</div><span class="modal-product-label">Elige tu color: <b id="currentModalColor">${modalColor}</b></span><div class="modal-product-colors">${p.colors.map(c=>`<button type="button" class="modal-color-option ${c===modalColor?'selected':''}" data-modal-color="${c}">${colorMarkup(c)} ${c}</button>`).join('')}</div>${p.price?`<div class="modal-qty"><span>Cantidad</span><div class="qty-control"><button type="button" data-modal-qty="-1" aria-label="Reducir cantidad"><svg class="ico"><use href="#i-minus"/></svg></button><span>${modalQty}</span><button type="button" data-modal-qty="1" aria-label="Aumentar cantidad"><svg class="ico"><use href="#i-plus"/></svg></button></div></div>`:''}<button type="button" class="btn primary full" data-modal-action="${p.price?'add':'quote'}">${p.price?'Añadir al carrito':'Cotizar por WhatsApp'} <svg class="ico"><use href="#i-arrow"/></svg></button><button type="button" class="btn cod-detail-button full" data-modal-action="cod">🚚 ${p.price?'Comprar contra entrega':'Consultar pago contra entrega'}</button><div class="modal-info-foot"><svg class="ico"><use href="#i-shield"/></svg> Pago al recibir en zonas elegibles · Sujeto a confirmación</div></div>`;
}
function openDetail(id){const p=pById[id];if(!p)return;currentProduct=id;modalColor=chosenColors[id]||p.colors[0];modalQty=1;activeProductPhoto=0;renderProductModal();openModal('productModal');}
function getShipping(){const val=$('#shippingZone').value;return val==='normal'?150:val==='tlajomulco'?200:null;}
function checkoutSummary(){
 const subtotal=cart.reduce((s,x)=>s+pById[x.id].price*x.qty,0),ship=getShipping();
 $('#checkoutSummary').innerHTML=`<div class="checkout-summary-row"><span>Productos (${cart.reduce((n,x)=>n+x.qty,0)})</span><strong>${money(subtotal)}</strong></div><div class="checkout-summary-row"><span>Entrega a domicilio</span><strong>${ship===null?'A confirmar':money(ship)}</strong></div><div class="checkout-summary-row final"><span>${ship===null?'Subtotal (sin envío)':'Total estimado'}</span><strong>${money(subtotal+(ship||0))}</strong></div>`;
}
function checkout(){if(!cart.length)return;toggleCart(false);checkoutSummary();openModal('checkoutModal');setTimeout(()=>{createMap('checkoutMap');activeMaps.checkoutMap?.invalidateSize();},60);}
function customerCheckout(evt){
 evt.preventDefault();if(!cart.length)return;
 const data=new FormData(evt.currentTarget),zone=data.get('shippingZone'),shipping=getShipping();
 const subtotal=cart.reduce((s,x)=>s+pById[x.id].price*x.qty,0);
 const info=cart.map(x=>{const p=pById[x.id];return `• ${p.name}\n  Medidas: ${productMeasurements(p).label}\n  Color: ${x.color} | Cantidad: ${x.qty} | ${money(p.price*x.qty)}`;}).join('\n');
 const zoneText=zone==='normal'?'Guadalajara / zona habitual':zone==='tlajomulco'?'Tlajomulco':zone==='republica'?'Toda la República Mexicana':'Otra zona (por confirmar)';
 const message=[`Hola, quiero confirmar este pedido de *Muebles Garoma*:`, '',info,'',`*Subtotal:* ${money(subtotal)}`,`*Entrega:* ${zoneText} — ${shipping===null?'Costo por confirmar':money(shipping)}`,`*${shipping===null?'Total sin envío':'Total estimado'}:* ${money(subtotal+(shipping||0))}`,'',`*Nombre:* ${data.get('customerName')}`,`*Teléfono:* ${data.get('customerPhone')}`,`*Colonia / municipio:* ${data.get('customerArea')}`,data.get('customerAddress')?`*Dirección:* ${data.get('customerAddress')}`:'',data.get('notes')?`*Indicaciones:* ${data.get('notes')}`:'',deliveryPin?`*Ubicación marcada en mapa:* ${locationUrl(deliveryPin)}`:data.get('checkoutMapsLink')?`*Ubicación Google Maps:* ${data.get('checkoutMapsLink')}`:'','Deseo pagar *contra entrega* (sujeto a disponibilidad por zona). ¿Me confirman disponibilidad, total y fecha de entrega?'].filter(Boolean).join('\n');
 whatsApp(message);
 toast('Tu pedido se abrió en WhatsApp para confirmarlo');
}
function customQuote(evt){
 evt.preventDefault();const d=new FormData(evt.currentTarget);
 const text=[`Hola, quiero cotizar un *mueble a medida* con Muebles Garoma.`,``,`*Nombre:* ${d.get('name')}`,`*Tipo:* ${d.get('type')}`,`*Medidas aproximadas:* ${d.get('measure')||'Por definir'}`,`*Color:* ${d.get('color')||'Por definir'}`,`*Mi idea:* ${d.get('description')}`,``,`¿Me pueden ayudar con una cotización?`].join('\n');whatsApp(text);
}

$('#categoryFilters').addEventListener('click',e=>{const btn=e.target.closest('button[data-filter]');if(!btn)return;currentCategory=btn.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===btn));renderProducts();});
$('#productSearch').addEventListener('input',renderProducts);
$('#sortProducts').addEventListener('change',renderProducts);
$('#clearFilters').addEventListener('click',()=>{$('#productSearch').value='';$('#sortProducts').value='featured';$('#categoryFilters button[data-filter="todos"]').click();});
$('#productsGrid').addEventListener('click',e=>{
 const med=e.target.closest('[data-measures]');if(med){requestMeasurements(med.dataset.measures);return;}
 const f=e.target.closest('[data-favorite]');if(f){const id=f.dataset.favorite;favorite=favorite.includes(id)?favorite.filter(x=>x!==id):[...favorite,id];setStore('garoma_favorites_v1',favorite);renderProducts();toast(favorite.includes(id)?'Añadido a favoritos':'Quitado de favoritos');return;}
 const color=e.target.closest('[data-color]');if(color){chosenColors[color.dataset.product]=color.dataset.color;renderProducts();return;}
 const cod=e.target.closest('[data-cod]');if(cod){const pid=cod.dataset.cod;buyContraEntrega(pid,chosenColors[pid]||pById[pid].colors[0]);return;}
 const action=e.target.closest('[data-action]');if(action){const {product,action:kind}=action.dataset;const col=chosenColors[product]||pById[product].colors[0];if(kind==='add')addToCart(product,col);else quoteProduct(product,col);return;}
 const detail=e.target.closest('[data-detail]');if(detail)openDetail(detail.dataset.detail);
});
$('#productsGrid').addEventListener('keydown',e=>{const d=e.target.closest('[data-detail]');if(d&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openDetail(d.dataset.detail);}});
$('#openCart').addEventListener('click',()=>toggleCart(true));$('#closeCart').addEventListener('click',()=>toggleCart(false));$('#drawerBackdrop').addEventListener('click',()=>toggleCart(false));
$('#cartItems').addEventListener('click',e=>{
 const change=e.target.closest('[data-cart-change]');const remove=e.target.closest('[data-remove]');
 if(change){const idx=Number(change.dataset.index),qty=Number(change.dataset.cartChange);if(!cart[idx])return;cart[idx].qty+=qty;if(cart[idx].qty<1)cart.splice(idx,1);else cart[idx].qty=Math.min(99,cart[idx].qty);saveCart();}
 if(remove){cart.splice(Number(remove.dataset.remove),1);saveCart();}
 if(e.target.closest('#goCatalog')){toggleCart(false);$('#catalogo').scrollIntoView({behavior:'smooth'});}
});
$('#checkoutButton').addEventListener('click',checkout);
document.querySelectorAll('[data-open-cod]').forEach(btn=>btn.addEventListener('click',openContraEntrega));
$('#clearCart').addEventListener('click',()=>{cart=[];saveCart();toast('Carrito vacío');});
$('#productModalContent').addEventListener('click',e=>{
 const med=e.target.closest('[data-measures]');if(med){requestMeasurements(med.dataset.measures);return;}
 const photo=e.target.closest('[data-photo-view]');if(photo){activeProductPhoto=Number(photo.dataset.photoView);renderProductModal();return;}
 const choice=e.target.closest('[data-modal-color]');if(choice){modalColor=choice.dataset.modalColor;chosenColors[currentProduct]=modalColor;renderProductModal();renderProducts();return;}
 const qty=e.target.closest('[data-modal-qty]');if(qty){modalQty=Math.max(1,Math.min(99,modalQty+Number(qty.dataset.modalQty)));renderProductModal();return;}
 const act=e.target.closest('[data-modal-action]');if(act){if(act.dataset.modalAction==='cod'){buyContraEntrega(currentProduct,modalColor,modalQty);}else if(act.dataset.modalAction==='add'){addToCart(currentProduct,modalColor,modalQty);closeModal('productModal');toggleCart(true);}else quoteProduct(currentProduct,modalColor);}
});
$('#shippingZone').addEventListener('change',checkoutSummary);
$('#checkoutForm').addEventListener('submit',customerCheckout);
$('#customForm').addEventListener('submit',customQuote);
$('#customQuoteBtn').addEventListener('click',()=>openModal('customModal'));
$('#shoeQuoteBtn').addEventListener('click',()=>{const select=document.querySelector('#customForm select[name="type"]');if(select)select.value='Zapatera';openModal('customModal');});
document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>closeModal(btn.dataset.close)));
document.querySelectorAll('.modal-backdrop').forEach(modal=>modal.addEventListener('click',e=>{if(e.target===modal)closeModal(modal.id);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=document.querySelector('.modal-backdrop:not([hidden])');if(open)closeModal(open.id);else toggleCart(false);}});
$('#menuToggle').addEventListener('click',()=>{const opened=$('#mobileNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(opened));});
document.querySelectorAll('#mobileNav a').forEach(a=>a.addEventListener('click',()=>{$('#mobileNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();
renderProducts();renderCart();

// Category shortcuts from the editorial collection tiles.
document.querySelectorAll('[data-category-shortcut]').forEach(link => link.addEventListener('click',()=> { const wanted=link.dataset.categoryShortcut; const filter=document.querySelector('#categoryFilters [data-filter="'+wanted+'"]'); if(filter) filter.click(); }));


// Mapa gratuito OpenStreetMap (Leaflet). La ubicación NO se solicita hasta que el cliente lo pide.
const defaultCenter = [20.6736,-103.3440]; // Guadalajara como vista inicial; no es la ubicación del cliente
function locationUrl(loc) { return `https://www.google.com/maps/search/?api=1&query=${loc.lat.toFixed(6)}%2C${loc.lng.toFixed(6)}`; }
function updatePin(lat,lng,zoom=false) {
  if(!Number.isFinite(lat)||!Number.isFinite(lng)||lat < -90||lat>90||lng < -180||lng>180)return;
  deliveryPin={lat,lng};
  Object.entries(activeMaps).forEach(([id,map])=>{
    if (activeMarkers[id]) activeMarkers[id].setLatLng([lat,lng]);
    else activeMarkers[id]=L.marker([lat,lng]).addTo(map);
    if(zoom) map.setView([lat,lng],Math.max(map.getZoom(),15));
  });
  const status=document.querySelector('#mapStatus');
  if(status)status.innerHTML=`<strong>📍 Ubicación marcada:</strong> ${lat.toFixed(5)}, ${lng.toFixed(5)} · Se adjuntará el enlace en tu WhatsApp.`;
  const checkoutStatus=document.querySelector('#checkoutMapStatus');
  if(checkoutStatus)checkoutStatus.textContent=`📍 Marcado: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const mapLink=document.querySelector('#mapViewLink');
  if(mapLink)mapLink.href=locationUrl(deliveryPin);
}
function createMap(id){
  if(activeMaps[id])return;
  const el=document.getElementById(id);
  if(!el)return;
  if(typeof window.L==='undefined'){
     el.classList.add('map-offline');
     const status=document.getElementById(id==='deliveryMap'?'mapStatus':'checkoutMapStatus');
     if(status)status.textContent='El mapa interactivo necesita conexión. Puedes usar la ubicación del teléfono o escribir tu dirección.';
     return;
  }
  el.innerHTML='';
  const map=L.map(id,{scrollWheelZoom:false}).setView(deliveryPin?[deliveryPin.lat,deliveryPin.lng]:defaultCenter,deliveryPin?15:11);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contribuidores'}).addTo(map);
  map.on('click', e=>updatePin(e.latlng.lat,e.latlng.lng));
  activeMaps[id]=map;
  if(deliveryPin)activeMarkers[id]=L.marker([deliveryPin.lat,deliveryPin.lng]).addTo(map);
  setTimeout(()=>map.invalidateSize(),120);
}
function locateCustomer(button){
 if(!navigator.geolocation){toast('Este navegador no permite acceder a la ubicación');return;}
 const original=button.textContent;
 button.disabled=true;button.textContent='Buscando ubicación…';
 navigator.geolocation.getCurrentPosition(pos=>{
   button.disabled=false;button.textContent=original;
   updatePin(pos.coords.latitude,pos.coords.longitude,true);
   toast('📍 Ubicación agregada a tu solicitud');
 },error=>{
   button.disabled=false;button.textContent=original;
   toast(error.code===1?'Activa el permiso de ubicación en tu navegador':'No se pudo detectar tu ubicación. Puedes escribirla manualmente.');
 },{enableHighAccuracy:true,timeout:14000,maximumAge:60000});
}
function requestShipping(){
 const zone=$('#deliveryZone').value;
 $('#deliveryPriceEstimate').innerHTML=zone==='normal'?'🚚 Envío habitual estimado: <strong>$150 MXN</strong>':zone==='tlajomulco'?'🚚 Envío a Tlajomulco estimado: <strong>$200 MXN</strong>':zone==='republica'?'🚚 <strong>Envío a toda la República: cotización por destino</strong>':'🚚 <strong>Envío a confirmar por WhatsApp</strong>';
}
function sendDeliveryData(e){
 e.preventDefault();
 const d=new FormData(e.currentTarget);
 const zone=d.get('deliveryZone');
 const price=zone==='normal'?'$150 MXN':zone==='tlajomulco'?'$200 MXN':zone==='republica'?'cotizar según destino':'por confirmar';
 const zona=zone==='normal'?'Guadalajara / zona habitual':zone==='tlajomulco'?'Tlajomulco':zone==='republica'?'Toda la República Mexicana':'Otra zona';
 const message=[
  'Hola, quiero solicitar *entrega a domicilio con Muebles Garoma* 🚚',
  '',`*Nombre:* ${d.get('deliveryName')}`,
  `*Teléfono:* ${d.get('deliveryPhone')}`,
  `*Zona:* ${zona}`,
  `*Colonia y municipio:* ${d.get('deliveryArea')}`,
  `*Dirección:* ${d.get('deliveryAddress')}`,
  `*Mueble de interés:* ${d.get('deliveryProduct')}`,
  d.get('deliveryNotes')?`*Indicaciones:* ${d.get('deliveryNotes')}`:'',
  deliveryPin?`*Ubicación exacta en Google Maps:* ${locationUrl(deliveryPin)}`:'*Ubicación GPS:* no marcada; usar dirección escrita',
  `*Envío estimado:* ${price}`,
  '*Modalidad:* Pago contra entrega (sujeto a confirmación).',
  '', '¿Me confirman disponibilidad y fecha de entrega?'
 ].filter(Boolean).join('\n');
 whatsApp(message);
 toast('Tu solicitud está preparada para enviarse por WhatsApp');
}
const mainLocate=document.getElementById('locateMain');
if(mainLocate) mainLocate.addEventListener('click',()=>locateCustomer(mainLocate));
const checkoutLocate=document.getElementById('locateCheckout');
if(checkoutLocate) checkoutLocate.addEventListener('click',()=>locateCustomer(checkoutLocate));
document.getElementById('clearLocation')?.addEventListener('click',()=>{
 deliveryPin=null;Object.keys(activeMarkers).forEach(id=>{activeMaps[id].removeLayer(activeMarkers[id]);delete activeMarkers[id]});
 $('#mapStatus').textContent='Ubicación quitada. Toca el mapa para fijar un punto de entrega.';
 $('#checkoutMapStatus').textContent='Puedes tocar el mapa para colocar el pin.';
 $('#mapViewLink').href='https://www.google.com/maps/search/?api=1&query=Guadalajara%2C%20Jalisco';
});
document.getElementById('deliveryZone')?.addEventListener('change',requestShipping);
document.getElementById('deliveryRequestForm')?.addEventListener('submit',sendDeliveryData);
window.addEventListener('load',()=>createMap('deliveryMap'));


// Cotización rápida de medidas sin almacenar información: abre WhatsApp desde una acción voluntaria.
document.getElementById('garomaQuickMeasurements')?.addEventListener('submit', function(event) {
 event.preventDefault();
 if (!this.reportValidity()) return;
 const f = new FormData(this);
 const clean = key => String(f.get(key) || '').trim();
 const furniture = clean('furniture');
 const name = clean('name');
 const location = clean('location');
 const alto = clean('alto'), ancho = clean('ancho'), fondo = clean('fondo');
 const notes = clean('notes');
 const message = [
  'Hola, Muebles Garoma 👋',
  'Quiero cotizar un mueble para mi espacio:',
  '',
  '🪑 Mueble: ' + furniture,
  '📏 *Mis medidas (en cm):*',
  '↕ Alto: ' + alto + ' cm',
  '↔ Ancho: ' + ancho + ' cm',
  '◩ Fondo: ' + fondo + ' cm',
  '🎨 Detalles: ' + (notes || 'Por definir'),
  '',
  '👤 Nombre: ' + name,
  '📍 Ciudad / colonia: ' + location,
  '🚚 Prefiero *pago contra entrega*, sujeto a cobertura y confirmación.',
  '¿Me pueden confirmar precio, disponibilidad y costo de envío?'
 ].join('\n');
 window.location.href = 'https://wa.me/523321923079?text=' + encodeURIComponent(message);
});
