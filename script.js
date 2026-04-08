document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const links = document.getElementById('nav-links');
    const logoText = document.getElementById('nav-logo-text');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white', 'py-4', 'shadow-md');
            nav.classList.remove('py-6');
            links.classList.remove('text-white');
            links.classList.add('text-primary');
            logoText.classList.remove('text-white');
            logoText.classList.add('text-primary');
            menuToggle.classList.remove('text-white');
            menuToggle.classList.add('text-primary');
        } else {
            nav.classList.remove('bg-white', 'py-4', 'shadow-md');
            nav.classList.add('py-6');
            links.classList.add('text-white');
            links.classList.remove('text-primary');
            logoText.classList.add('text-white');
            logoText.classList.remove('text-primary');
            menuToggle.classList.add('text-white');
            menuToggle.classList.remove('text-primary');
        }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
    menuClose.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Hero Background Slider
    const track = document.getElementById('hero-slider-track');
    let index = 0;
    const slideWidth = 100 / 6;

    const nextSlide = () => {
        index++;
        track.style.transition = 'transform 1000ms ease-in-out';
        track.style.transform = `translateX(-${index * slideWidth}%)`;

        if (index === 5) {
            setTimeout(() => {
                track.style.transition = 'none';
                index = 0;
                track.style.transform = `translateX(0)`;
            }, 1000);
        }
    };

    setInterval(nextSlide, 3000);

    // Form Submission Handling
    const form = document.getElementById('enquiry-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            status.textContent = "Sending...";
            status.classList.remove('hidden', 'text-red-500', 'text-green-500');
            status.classList.add('text-primary');

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.textContent = "Thank you! We will contact you soon.";
                    status.classList.replace('text-primary', 'text-green-500');
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch (error) {
                status.textContent = "Oops! Something went wrong. Please try again.";
                status.classList.replace('text-primary', 'text-red-500');
            }
        };
    }

    // Scroll Reveal 
    const reveals = document.querySelectorAll('.reveal');
    const checkReveal = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.85) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', checkReveal);
    checkReveal();
});

// Furniture Modal Data
const furnitureData = {
    'living': {
        title: 'Luxe Living Room Sets',
        desc: 'Our living room collections are designed for the modern Tamil Nadu home. Each sofa is built on a solid teak frame with premium cushioning.',
        specs: ['Solid Teak Wood Frame', 'Lifetime Wood Warranty', 'Custom Upholstery Options', 'Available in 3, 5, or 7 seaters'],
        img: 'assets/hero.png'
    },
    'dining': {
        title: 'Grand Dining Collections',
        desc: 'Table for memories. Our grand dining sets feature single-plank teak tops or intricate joinery that lasts for generations.',
        specs: ['Teak/Rosewood Options', 'Water-resistant Finish', '6-12 Seater Capacity', 'Matching Hand-carved Chairs'],
        img: 'assets/dining.png'
    },
    'bedroom': {
        title: 'Bedroom Sanctuaries',
        desc: 'Rest easy on 100% genuine wood. Our beds are designed for both orthopedic support and traditional elegance.',
        specs: ['King/Queen/Custom Sizes', 'Headboard Carving Options', 'Integrated Storage Drawers', 'High Polish Finish'],
        img: 'assets/bedroom.png'
    },
    'doors': {
        title: 'Traditional Entrance Doors',
        desc: 'Make a grand entry. Our doors are carved by master craftsmen following traditional designs.',
        specs: ['A-Grade Teak Wood', 'Custom Main Frame Sizes', 'Intricate Relief Work', 'Weather-proof Sealants'],
        img: 'assets/doors.png'
    },
    'stairs': {
        title: 'Architectural Stairs',
        desc: 'Custom-fitted wooden staircases that add warmth and value to your home architecture.',
        specs: ['Anti-slip Texture', 'Integrated Railing Design', 'Custom Curve/Straight Fits', 'Professional Installation'],
        img: 'assets/stairs.png'
    },
    'cabinets': {
        title: 'Hand-carved Cabinets',
        desc: 'Storage as art. These almirahs combine deep storage spaces with stunning outer carvings.',
        specs: ['Adjustable Shelves', 'Hand-forged Brass Hardware', 'Antique or Modern Gloss', 'Termite-proof Solid Build'],
        img: 'assets/storage.png'
    },
    'pooja': {
        title: 'Sacred Pooja Mandirs',
        desc: 'Traditional prayer shrines designed according to Vaastu principles and spiritual aesthetics.',
        specs: ['Prism Grained Teak', 'Copper/Brass Hardware', 'Drawer for Puja Items', 'Integrated LED lighting spots'],
        img: 'assets/storage.png'
    },
    'swings': {
        title: 'Traditional Swings (Jhula)',
        desc: 'The center of joy in a home. Our swings are built to hold heavy loads safely with elegant designs.',
        specs: ['Heavy-duty Steel/Brass Chains', 'Solid Teak Base', 'Engraved Side Panels', 'Indoor/Outdoor Options'],
        img: 'assets/hero.png'
    },
    'office': {
        title: 'Executive Office Desks',
        desc: 'Command respect with a solid wood desk. Designed for both professional functionality and premium look.',
        specs: ['Cable Management Ports', 'Document Drawers', 'Large Work Surface', 'Ergonomic Height'],
        img: 'assets/dining.png'
    },
    'paneling': {
        title: 'Interior Wall Paneling',
        desc: 'Transform any room with high-end wood paneling that improves insulation and looks stunning.',
        specs: ['Fluted or Smooth Panels', 'Sound Dampening Properties', 'Easy Concealed Mounting', 'Teak or Veneer Options'],
        img: 'assets/doors.png'
    },
    'shoe-racks': {
        title: 'Premium Shoe Racks',
        desc: 'Keep your entrance organized with breathable wood storage for your footwear.',
        specs: ['Ventilated Panels', 'Soft-close Hinges', 'Multi-level Racking', 'Sitting Bench Top Option'],
        img: 'assets/storage.png'
    },
    'coffee': {
        title: 'Balcony Coffee Sets',
        desc: 'Small footprint, big relaxation. Perfect for compact balconies or cozy reading nooks.',
        specs: ['Foldable Options', 'Weather-treated Coating', 'Comes with 2 Stools/Chairs', 'Compact Round/Square Tables'],
        img: 'assets/dining.png'
    }
};

function openFurnitureModal(id) {
    const data = furnitureData[id];
    const modal = document.getElementById('furniture-modal');
    const content = document.getElementById('modal-body-content');
    
    if (!data) return;

    content.innerHTML = `
        <div class="md:w-1/2">
            <img src="${data.img}" class="w-full h-full object-cover min-h-[300px]">
        </div>
        <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 class="text-3xl md:text-4xl font-serif mb-6 text-primary font-bold">${data.title}</h2>
            <p class="text-primary/70 text-base md:text-lg mb-8 leading-relaxed">${data.desc}</p>
            <div class="space-y-4 mb-10">
                <p class="font-bold uppercase text-[10px] tracking-[0.2em] text-accent">Key Specifications</p>
                <ul class="grid grid-cols-1 gap-3">
                    ${data.specs.map(s => `<li class="flex items-center gap-3 text-sm text-primary/80"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span>${s}</li>`).join('')}
                </ul>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contact" onclick="closeFurnitureModal()" class="btn-main flex-1 text-center py-4">Enquire to Order</a>
                <a href="https://wa.me/919842571430?text=Hi, I am interested in ${data.title}. (Product Image Reference: ${data.img})" target="_blank" class="px-6 py-4 border-2 border-primary/20 hover:bg-primary/5 transition-all rounded shadow-sm flex items-center justify-center gap-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7 1 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm6.9 16.9c-.3.8-1.5 1.6-2.5 1.7-.7.1-1.6.2-4.6-1.1-3.8-1.6-6.3-5.4-6.5-5.7-.2-.3-1.6-2.2-1.6-4.1s1-2.9 1.4-3.3c.3-.4.8-.5 1.1-.5.3 0 .5 0 .8.1.3 0 .6-.1.9.6.3.8 1.1 2.6 1.2 2.8s.2.4.1.7c-.1.3-.2.5-.4.8-.2.3-.4.5-.6.8-.2.3-.4.6-.2.9s.9 1.5 1.9 2.4c1.3 1.2 2.4 1.5 2.7 1.7s.6.1.8-.1c.3-.3.8-.9 1-1.2.3-.3.6-.3.9-.2.3.1 2.1 1 2.5 1.2.4.2.6.3.7.5.1.3.1 1.3-.2 2.1z"/></svg>
                    <span class="font-bold uppercase text-[10px] tracking-widest sm:hidden">WhatsApp US</span>
                </a>
            </div>
        </div>
    `;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        document.getElementById('modal-content').classList.remove('scale-95');
        document.body.style.overflow = 'hidden';
    }, 10);
}

function closeFurnitureModal() {
    const modal = document.getElementById('furniture-modal');
    document.getElementById('modal-content').classList.add('scale-95');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto';
}
