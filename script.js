document.addEventListener("DOMContentLoaded", () => {
    // 1. Автоматичне оновлення року в footer
    const currentYear = new Date().getFullYear();
    const yearSpan1 = document.getElementById("currentYear");
    const yearSpan2 = document.getElementById("currentYear2");
    if(yearSpan1) yearSpan1.textContent = currentYear;
    if(yearSpan2) yearSpan2.textContent = currentYear;

    // 2. Мобільне навігаційне меню (Burger Menu)
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    if(burger) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            // Анімація ліній бургера
            burger.classList.toggle("toggle");
        });
    }

    // 3. Ініціалізація графіка на сторінці країни (Chart.js)
    const ctx = document.getElementById('securityChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Крайня бідність', 
                    'Тіньова економіка', 
                    'Нагромадження капіталу', 
                    'Відкритість економіки (перевищення)', 
                    'Відновлювана енергія'
                ],
                datasets: [{
                    label: 'Значення показника (%)',
                    data: [0.1, 17.09, 22.15, 157.57, 10.71],
                    backgroundColor: [
                        'rgba(39, 174, 96, 0.7)',  // Зелений (Оптимально)
                        'rgba(243, 156, 18, 0.7)', // Жовтий (Задовільно)
                        'rgba(231, 76, 60, 0.7)',  // Червоний (Небезпечно)
                        'rgba(192, 57, 43, 0.7)',  // Темно-червоний (Критично)
                        'rgba(192, 57, 43, 0.7)'   // Темно-червоний (Критично)
                    ],
                    borderColor: [
                        'rgba(39, 174, 96, 1)',
                        'rgba(243, 156, 18, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(192, 57, 43, 1)',
                        'rgba(192, 57, 43, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Відсотки (%)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});
