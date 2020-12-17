<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Income $",
            backgroundColor: "#2962ff",
            data: [2000, 40000, 20000, 39000, 10000, 40000, 69000],
          },
            {
                label: "Push $",
                backgroundColor: "#ff8c00",
                data: [1000, 20000, 40000, 19000, 3000, 16000, 45000],
            }
        ]
      },
      { responsive: true, maintainAspectRatio: false, scales: {
              xAxes: [{
                  barThickness: 7,
              }]
          } }
    );
  }
};
</script>
