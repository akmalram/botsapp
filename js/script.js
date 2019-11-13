window.addEventListener('DOMContentLoaded', () => {
    let menuToggler = () => {
        let btn = document.querySelector('header .btn-toggle');
        let menu = document.querySelector('nav .menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 720) {
                btn.classList.remove('active');
                menu.classList.remove('active');
            }
        })
    }

    let changeMaxHeight = (value, element) => {
        if(window.getComputedStyle(element).maxHeight > `${0}px`) {
            element.style.cssText = "max-height: 0px;";
        } else {
            element.style.cssText = `max-height: ${value}px;`;
        }
    }

    let worksListToggler = () => {
        let btn = document.querySelectorAll('.bot-can .list-btn');
        btn.forEach(one => {
            one.addEventListener('click', (e) => {
                let el = e.target;
                let elParent = el.parentNode;

                if(elParent.classList.contains('list-toggle')) {
                    let target = el.nextElementSibling;
                    changeMaxHeight(1000, target);
                } else if (elParent.parentNode.classList.contains('list-toggle')) {
                    let target = el.parentNode.nextElementSibling;
                    changeMaxHeight(1000, target);
                }
            });
        });
    }

    let projectsShowMoreToggle = () => {
        let btn = document.querySelector('.projects .show-more-btn');
        let container = document.querySelector('.projects .projects-container');

        btn.addEventListener('click', () => {
            if(container.classList.contains('hide')) {
                container.classList.remove('hide');
                btn.innerText = 'Показать больше';
            } else {
                container.classList.add('hide');
                btn.innerText = 'Скрыть';

            }
        })
    }

    let onNavScroll = () => {
        let target = document.querySelector('header nav');

        window.addEventListener('scroll', () => {

            if(window.pageYOffset > 0) {
                target.classList.add('scrolled');
            } else if(window.pageYOffset == 0) {
                target.classList.remove('scrolled');
            }
        });
    }

    onNavScroll();
    worksListToggler();
    menuToggler();
    projectsShowMoreToggle();
});