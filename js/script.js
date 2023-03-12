'use strict';
window.addEventListener('DOMContentLoaded', () => {

// === info ===
    const infoOff = document.querySelector('.info_off'),
        pulse = document.querySelector('.pulse');

        pulse.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target && e.target.classList.contains('pulse') || e.target.classList.contains('pulse_text')) {
                infoOff.classList.add('info_on');
            } 
        });

        document.addEventListener('click', (e) => {
            if (e.target && !e.target.classList.contains('pulse') && !e.target.classList.contains('pulse_text')) {
                infoOff.classList.remove('info_on');
            }
        });

// === Modal ===
    const dataModal = document.querySelectorAll('[data-modal]'),
            dataClose = document.querySelector('[data-close]'),
            modal = document.querySelector('.modal');


        function openModal () {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        dataModal.forEach((item) => {
            item.addEventListener ('click', openModal);
        });

        dataClose.addEventListener ('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });

// === Hamburger ===
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');         
        });

        menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

// === Paralax ===
    const parallaxImgOne = document.querySelector('.parallax_img_one'),
            parallaxImgTwo = document.querySelector('.parallax_img_two'),
            parallaxImgThree = document.querySelector('.parallax_img_three');

    document.addEventListener('scroll', function() {
        let offSet = window.pageYOffset;

        if (offSet++) {
            parallaxImgOne.style.top = 14.167 + (offSet * 0.02) +'vw';
            parallaxImgTwo.style.top = 32.708 - (offSet * 0.1) +'vw';
            parallaxImgThree.style.top = 4.323 + (offSet * 0.01) +'vw';
        }
        
        if (offSet--) {
            parallaxImgOne.style.top = 14.167 - (offSet * 0.02) +'vw';
            parallaxImgTwo.style.top = 32.708 - (offSet * 0.1) +'vw';
            parallaxImgThree.style.top = 4.323 - (offSet * 0.01) +'vw';
        }
    });
});


