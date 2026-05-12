const WHATSAPP_NUMBER = "573000000000";

const formatCOP = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value).replace("COP", "").trim();

const products = [
  {
    id: "frijolada",
    category: "plato-fuerte",
    categoryLabel: "Plato fuerte",
    title: "Frijolada Saludable",
    price: 15300,
    image: "assets/frijolada.jpg",
    description: "Tradicional, completa y balanceada.",
    cardDescription: "Fríjol, arroz, proteína y acompañamientos.",
    groups: [
      {
        id: "protein",
        title: "Proteína",
        type: "radio",
        options: [
          { id: "carne", label: "Carne molida magra", grams: "120 g", price: 0, detail: "Proteína magra sazonada de forma casera." },
          { id: "pollo", label: "Pollo desmechado", grams: "120 g", price: 0, detail: "Pollo cocido y desmechado, bajo en grasa." },
          { id: "chorizo", label: "Chorizo artesanal", grams: "70 g", price: 1500, detail: "Opción tradicional de sabor más intenso." },
          { id: "chicharron", label: "Chicharrón crocante", grams: "60 g", price: 1500, detail: "Complemento tradicional de textura crocante." },
          { id: "huevo", label: "Huevo cocido", grams: "1 und", price: 0, detail: "Opción sencilla y balanceada." }
        ],
        default: "carne"
      },
      {
        id: "ingredientes",
        title: "Ingredientes",
        type: "checkbox",
        options: [
          { id: "arroz", label: "Arroz integral", grams: "150 g", price: 0, detail: "Acompañamiento base de la porción." },
          { id: "frijol", label: "Fríjol cargamanto", grams: "150 g", price: 0, detail: "Preparación casera, fuente de fibra." },
          { id: "tajada", label: "Tajada de plátano", grams: "80 g", price: 0, detail: "Aporta dulzor natural al plato." },
          { id: "arepa", label: "Arepa pequeña", grams: "1 und", price: 0, detail: "Acompañamiento tradicional." },
          { id: "aguacate", label: "Aguacate", grams: "50 g", price: 0, detail: "Grasa saludable y textura cremosa." }
        ],
        default: ["arroz", "frijol", "tajada", "arepa", "aguacate"]
      },
      {
        id: "extras",
        title: "Extras",
        type: "checkbox",
        options: [
          { id: "hogao", label: "Hogao casero", grams: "25 g", price: 0, detail: "Salsa tradicional a base de tomate y cebolla." },
          { id: "extra-aguacate", label: "Extra aguacate", grams: "50 g", price: 1800, detail: "Porción adicional de aguacate." },
          { id: "huevo-extra", label: "Huevo adicional", grams: "1 und", price: 1200, detail: "Huevo cocido extra." },
          { id: "arepa-extra", label: "Arepa adicional", grams: "1 und", price: 1000, detail: "Arepa extra para acompañar." }
        ],
        default: []
      }
    ]
  },
  {
    id: "pollo",
    category: "plato-fuerte",
    categoryLabel: "Plato fuerte",
    title: "Pollo Grill Saludable",
    price: 16500,
    image: "assets/pollo.jpg",
    description: "Proteína magra con vegetales al vapor.",
    cardDescription: "Pollo grill + vegetales frescos.",
    groups: [
      {
        id: "protein",
        title: "Proteína",
        type: "radio",
        options: [
          { id: "normal", label: "Pollo grill", grams: "150 g", price: 0, detail: "Pechuga a la plancha, baja en grasa." },
          { id: "doble", label: "Doble proteína", grams: "250 g", price: 4500, detail: "Mayor porción de proteína." }
        ],
        default: "normal"
      },
      {
        id: "ingredientes",
        title: "Ingredientes",
        type: "checkbox",
        options: [
          { id: "zanahoria", label: "Zanahoria", grams: "45 g", price: 0, detail: "Corte suave, cocción al vapor." },
          { id: "arveja", label: "Arveja", grams: "35 g", price: 0, detail: "Acompañamiento vegetal." },
          { id: "habichuela", label: "Habichuela", grams: "40 g", price: 0, detail: "Vegetal fresco de textura ligera." },
          { id: "cebolla", label: "Cebolla", grams: "20 g", price: 0, detail: "Base de sabor natural." }
        ],
        default: ["zanahoria", "arveja", "habichuela", "cebolla"]
      },
      {
        id: "extras",
        title: "Extras",
        type: "checkbox",
        options: [
          { id: "ensalada", label: "Ensalada fresca", grams: "80 g", price: 1800, detail: "Mezcla de vegetales frescos." },
          { id: "aguacate", label: "Aguacate", grams: "50 g", price: 1800, detail: "Acompañamiento saludable." },
          { id: "arepa", label: "Arepa pequeña", grams: "1 und", price: 1000, detail: "Acompañamiento adicional." },
          { id: "salsa", label: "Salsa de la casa", grams: "20 g", price: 0, detail: "Salsa natural sin costo adicional." }
        ],
        default: []
      }
    ]
  },
  {
    id: "bowl",
    category: "plato-fuerte",
    categoryLabel: "Plato fuerte",
    title: "Bowl Vegetariano",
    price: 14900,
    image: "assets/bowl.jpg",
    description: "Nutritivo, fresco y lleno de sabor.",
    cardDescription: "Vegetales, granos y acompañamientos.",
    groups: [
      {
        id: "base",
        title: "Base",
        type: "radio",
        options: [
          { id: "quinoa", label: "Quinoa", grams: "120 g", price: 0, detail: "Base ligera y nutritiva." },
          { id: "arroz", label: "Arroz integral", grams: "150 g", price: 0, detail: "Base clásica de mayor saciedad." }
        ],
        default: "quinoa"
      },
      {
        id: "ingredientes",
        title: "Ingredientes",
        type: "checkbox",
        options: [
          { id: "aguacate", label: "Aguacate", grams: "50 g", price: 0, detail: "Grasa saludable y textura cremosa." },
          { id: "zanahoria", label: "Zanahoria", grams: "40 g", price: 0, detail: "Vegetal fresco." },
          { id: "arveja", label: "Arveja", grams: "30 g", price: 0, detail: "Acompañamiento vegetal." },
          { id: "habichuela", label: "Habichuela", grams: "35 g", price: 0, detail: "Textura ligera." }
        ],
        default: ["aguacate", "zanahoria", "arveja", "habichuela"]
      },
      {
        id: "extras",
        title: "Extras",
        type: "checkbox",
        options: [
          { id: "semillas", label: "Mix de semillas", grams: "12 g", price: 700, detail: "Topping crocante y nutritivo." },
          { id: "queso", label: "Queso deslactosado", grams: "25 g", price: 1200, detail: "Queso suave para complementar." },
          { id: "salsa", label: "Vinagreta natural", grams: "20 g", price: 0, detail: "Aderezo natural de la casa." }
        ],
        default: []
      }
    ]
  },
  {
    id: "marranitas",
    category: "snack",
    categoryLabel: "Snack",
    title: "Marranitas Crocantes",
    price: 14900,
    image: "assets/marranitas.jpg",
    description: "Crocantes, caseras y con salsa natural.",
    cardDescription: "Plátano, carne y salsa casera.",
    groups: [
      {
        id: "portion",
        title: "Porción",
        type: "radio",
        options: [
          { id: "x3", label: "Porción x 3", grams: "3 und", price: 0, detail: "Porción personal o para compartir." },
          { id: "x5", label: "Porción x 5", grams: "5 und", price: 4500, detail: "Porción para compartir." }
        ],
        default: "x3"
      },
      {
        id: "ingredientes",
        title: "Ingredientes",
        type: "locked",
        options: [
          { id: "platano", label: "Plátano", grams: "150 g", price: 0, detail: "Base de la marranita." },
          { id: "carne", label: "Carne molida", grams: "50 g", price: 0, detail: "Relleno de la preparación." },
          { id: "cebolla", label: "Cebolla", grams: "8 g", price: 0, detail: "Base de sabor del relleno." },
          { id: "salsa", label: "Salsa de tomate natural", grams: "20 g", price: 0, detail: "Salsa casera a base de tomate." }
        ]
      },
      {
        id: "extras",
        title: "Extras",
        type: "checkbox",
        options: [
          { id: "extra-salsa", label: "Extra salsa", grams: "20 g", price: 0, detail: "Salsa adicional sin costo." },
          { id: "queso", label: "Queso deslactosado", grams: "25 g", price: 1200, detail: "Queso suave para acompañar." }
        ],
        default: []
      }
    ]
  },
  {
    id: "chicha",
    category: "bebida",
    categoryLabel: "Bebida",
    title: "Chicha Artesanal",
    price: 8900,
    image: "assets/chicha.jpg",
    description: "Artesanal, natural y sin conservantes.",
    cardDescription: "Bebida artesanal de la casa.",
    groups: [
      {
        id: "presentation",
        title: "Presentación",
        type: "radio",
        options: [
          { id: "vaso", label: "Vaso", grams: "300 ml", price: 0, detail: "Presentación para consumir al momento." },
          { id: "botella", label: "Botella PET", grams: "500 ml", price: 2000, detail: "Presentación para llevar." }
        ],
        default: "vaso"
      },
      {
        id: "ingredientes",
        title: "Ingredientes",
        type: "locked",
        options: [
          { id: "chicha", label: "Base de chicha artesanal", grams: "300 ml", price: 0, detail: "Preparación de la casa." },
          { id: "endulzante", label: "Endulzante natural", grams: "10 ml", price: 0, detail: "Toque dulce equilibrado." }
        ]
      },
      {
        id: "opcionales",
        title: "Opcionales",
        type: "checkbox",
        options: [
          { id: "hielo", label: "Hielo", grams: "40 ml", price: 0, detail: "Opcional para servir más fría." }
        ],
        default: ["hielo"]
      }
    ]
  }
];

const state = {
  selectedCategory: "all",
  activeProductId: null,
  selections: {},
  quantity: 1,
  summaryOpen: true,
  cart: []
};

const productGrid = document.getElementById("productGrid");
const categoryNav = document.getElementById("categoryNav");
const emptyState = document.getElementById("emptyState");
const productDetail = document.getElementById("productDetail");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailSubtitle = document.getElementById("detailSubtitle");
const choiceStack = document.getElementById("choiceStack");
const summaryIngredients = document.getElementById("summaryIngredients");
const weightRow = document.getElementById("weightRow");
const summaryContent = document.getElementById("summaryContent");
const summaryToggle = document.getElementById("summaryToggle");
const summaryToggleText = document.getElementById("summaryToggleText");
const totalPrice = document.getElementById("totalPrice");
const quantityValue = document.getElementById("quantityValue");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");
const addToCart = document.getElementById("addToCart");
const backToMenu = document.getElementById("backToMenu");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawer = document.getElementById("closeDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const sendWhatsApp = document.getElementById("sendWhatsApp");

function initProduct(product) {
  if (state.selections[product.id]) return;
  const selections = {};
  product.groups.forEach(group => {
    if (group.type === "radio") selections[group.id] = group.default || group.options[0].id;
    if (group.type === "checkbox") selections[group.id] = group.default ? [...group.default] : [];
  });
  state.selections[product.id] = selections;
}

function activeProduct() {
  return products.find(p => p.id === state.activeProductId) || null;
}

function selectedItems(product) {
  initProduct(product);
  const selections = state.selections[product.id];
  const items = [];
  product.groups.forEach(group => {
    if (group.type === "locked") {
      items.push(...group.options);
    }
    if (group.type === "radio") {
      const selected = group.options.find(opt => opt.id === selections[group.id]);
      if (selected) items.push(selected);
    }
    if (group.type === "checkbox") {
      const checked = selections[group.id] || [];
      group.options.forEach(opt => {
        if (checked.includes(opt.id)) items.push(opt);
      });
    }
  });
  return items;
}

function productTotal(product) {
  return product.price + selectedItems(product).reduce((sum, item) => sum + (item.price || 0), 0);
}

function parseMeasure(value = "") {
  const text = String(value).toLowerCase();
  const num = parseFloat(text.replace(",", "."));
  if (Number.isNaN(num)) return { grams: 0, ml: 0, units: 0 };
  if (text.includes("ml")) return { grams: 0, ml: num, units: 0 };
  if (text.includes("g")) return { grams: num, ml: 0, units: 0 };
  if (text.includes("und")) return { grams: 0, ml: 0, units: num };
  return { grams: 0, ml: 0, units: 0 };
}

function totalMeasureLabel(items, product) {
  const totals = items.reduce((acc, item) => {
    const m = parseMeasure(item.grams);
    acc.grams += m.grams;
    acc.ml += m.ml;
    return acc;
  }, { grams: 0, ml: 0 });

  if (product && product.category === "bebida") {
    return totals.ml ? `${Math.round(totals.ml)} ml` : "No disponible";
  }

  return totals.grams ? `${Math.round(totals.grams)} g` : "No disponible";
}

function renderProducts() {
  productGrid.innerHTML = "";
  const visible = state.selectedCategory === "all"
    ? products
    : products.filter(p => p.category === state.selectedCategory);

  visible.forEach(product => {
    const card = document.createElement("article");
    card.className = `product-card ${product.id === state.activeProductId ? "active" : ""}`;
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.image}" alt="${product.title}">
        <span class="card-pill cat">${product.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3>${product.title}</h3>
        <p>${product.cardDescription}</p>
        <button class="view-btn" type="button">Ver Producto ›</button>
      </div>
    `;
    card.addEventListener("click", () => {
      state.activeProductId = product.id;
      state.quantity = 1;
      renderAll();
      if (window.matchMedia("(max-width: 760px)").matches) {
        document.body.classList.add("detail-open");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById("productPanel").scrollIntoView({behavior:"smooth", block:"nearest"});
      }
    });
    productGrid.appendChild(card);
  });
}

function optionPriceLabel(option) {
  if (option.price && option.price > 0) return `+ ${formatCOP(option.price)}`;
  return option.grams || "";
}

function renderChoiceGroup(product, group, groupIndex) {
  const selections = state.selections[product.id];
  const wrap = document.createElement("div");
  wrap.className = "choice-group";
  const hint = group.type === "radio" ? "Elige 1" : group.type === "checkbox" ? "Personalizable" : "Incluido";
  wrap.innerHTML = `
    <div class="choice-title">
      <b>${groupIndex + 1}</b>
      <strong>${group.title}</strong>
      <small>${hint}</small>
    </div>
  `;
  group.options.forEach(option => {
    const row = document.createElement("label");
    row.className = "option";
    const locked = group.type === "locked";
    const inputType = group.type === "radio" ? "radio" : "checkbox";
    let checked = false;
    if (locked) checked = true;
    if (group.type === "radio") checked = selections[group.id] === option.id;
    if (group.type === "checkbox") checked = (selections[group.id] || []).includes(option.id);

    row.innerHTML = `
      <input type="${inputType}" name="${group.id}" ${checked ? "checked" : ""} ${locked ? "disabled" : ""}>
      <span class="option-main">
        <strong>${option.label}</strong>
        <span>${option.detail}</span>
      </span>
      <span class="option-extra">${optionPriceLabel(option)}</span>
    `;
    if (!locked) {
      row.querySelector("input").addEventListener("change", () => {
        if (group.type === "radio") selections[group.id] = option.id;
        if (group.type === "checkbox") {
          const current = new Set(selections[group.id] || []);
          if (current.has(option.id)) current.delete(option.id);
          else current.add(option.id);
          selections[group.id] = [...current];
        }
        renderDetail();
      });
    }
    wrap.appendChild(row);
  });
  return wrap;
}

function renderDetail() {
  const product = activeProduct();
  if (!product) {
    emptyState.classList.remove("hidden");
    productDetail.classList.add("hidden");
    document.body.classList.remove("has-selection", "detail-open");
    return;
  }

  initProduct(product);
  document.body.classList.add("has-selection");
  emptyState.classList.add("hidden");
  productDetail.classList.remove("hidden");

  detailCategory.textContent = product.categoryLabel;
  detailTitle.textContent = product.title;
  detailSubtitle.textContent = product.description;

  choiceStack.innerHTML = "";
  product.groups.forEach((group, index) => {
    choiceStack.appendChild(renderChoiceGroup(product, group, index));
  });

  const items = selectedItems(product);
  summaryIngredients.innerHTML = items.map(item => `
    <span class="ingredient-name">${item.label}</span>
    <span class="ingredient-detail">${item.grams || ""}</span>
  `).join("");

  weightRow.innerHTML = `
    <span>Total aproximado</span>
    <strong>${totalMeasureLabel(items, product)}</strong>
  `;

  summaryContent.classList.toggle("hidden", !state.summaryOpen);
  summaryToggleText.textContent = state.summaryOpen ? "Ocultar⌃" : "Ver⌄";

  const total = productTotal(product) * state.quantity;
  totalPrice.textContent = formatCOP(total);
  quantityValue.textContent = state.quantity;

  addToCart.textContent = `Agregar al pedido · ${formatCOP(total)}`;
}

function renderAll() {
  renderProducts();
  renderDetail();
  renderCart();
}

function getConfigurationText(product) {
  const items = selectedItems(product);
  return `${items.map(item => `${item.label} (${item.grams})`).join(", ")}. Total aprox.: ${totalMeasureLabel(items, product)}`;
}

function getWhatsAppConfigurationText(product) {
  const items = selectedItems(product);
  return items.map(item => `${item.label} (${item.grams})`).join(", ");
}

function addCurrentToCart() {
  const product = activeProduct();
  const unitTotal = productTotal(product);
  const line = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    productId: product.id,
    title: product.title,
    qty: state.quantity,
    unitTotal,
    total: unitTotal * state.quantity,
    details: getConfigurationText(product),
    whatsappDetails: getWhatsAppConfigurationText(product)
  };

  line.configKey = `${line.productId}|${line.unitTotal}|${line.whatsappDetails}`;

  const existingLine = state.cart.find(item => item.configKey === line.configKey);

  if (existingLine) {
    existingLine.qty += line.qty;
    existingLine.total = existingLine.qty * existingLine.unitTotal;
  } else {
    state.cart.push(line);
  }
  state.quantity = 1;
  renderAll();
  document.body.classList.remove("detail-open");
  openCart();
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const total = state.cart.reduce((sum, item) => sum + item.total, 0);
  cartCount.textContent = count;
  cartTotal.textContent = formatCOP(total);

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="cart-line"><h3>Tu pedido está vacío</h3><p>Agrega productos desde el menú.</p></div>`;
  } else {
    cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-line">
        <div class="cart-line-head">
          <div>
            <h3>${item.qty} × ${item.title}</h3>
            <strong>${formatCOP(item.total)}</strong>
          </div>
          <button type="button" data-remove="${item.id}">Quitar</button>
        </div>
        <p>${item.details}</p>
      </div>
    `).join("");
  }

  cartItems.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.cart = state.cart.filter(item => item.id !== btn.dataset.remove);
      renderCart();
    });
  });

  const messageLines = state.cart.map(item =>
    `• ${item.qty} x ${item.title} - ${formatCOP(item.total)}%0A  ${item.whatsappDetails || item.details.replace(/\. Total aprox\.:.*$/, "")}`
  ).join("%0A");
  const message = state.cart.length
    ? `Hola, quiero hacer este pedido:%0A${messageLines}%0A%0ATotal: ${formatCOP(total)}`
    : "Hola, quiero hacer un pedido.";
  sendWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function openCart() {
  cartDrawer.classList.remove("hidden");
  drawerBackdrop.classList.remove("hidden");
}

function closeCart() {
  cartDrawer.classList.add("hidden");
  drawerBackdrop.classList.add("hidden");
}

categoryNav.addEventListener("click", (e) => {
  const btn = e.target.closest(".category");
  if (!btn) return;
  state.selectedCategory = btn.dataset.category;
  categoryNav.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
});

summaryToggle.addEventListener("click", () => {
  state.summaryOpen = !state.summaryOpen;
  renderDetail();
});

increaseQty.addEventListener("click", () => {
  state.quantity += 1;
  renderDetail();
});

decreaseQty.addEventListener("click", () => {
  state.quantity = Math.max(1, state.quantity - 1);
  renderDetail();
});

addToCart.addEventListener("click", addCurrentToCart);
backToMenu.addEventListener("click", () => {
  document.body.classList.remove("detail-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
cartButton.addEventListener("click", openCart);
closeDrawer.addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);

products.forEach(initProduct);
renderAll();
