<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagramme avec Chart.js</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <!-- Ajout de Tailwind CSS (CDN si nécessaire) -->
    <script src="https://cdn.tailwindcss.com"></script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="w-[50%] h-[50vh]">
    <h1>Diagramme de Vente</h1>
    <canvas id="myChart" width="200" height="100" class="w-[50%] h-[50vh]"></canvas>

    <script>
        // Données pour le diagramme
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',  // Type du graphique (ici un graphique linéaire)
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Labels des mois
                datasets: [{
                    label: 'Ventes',
                    data: [1, 9, 3, 15, 2, 13],  // Données des ventes
                    borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Graphique des ventes mensuelles'
                    }
                }
            }
        });
    </script>
</body>
</html>
