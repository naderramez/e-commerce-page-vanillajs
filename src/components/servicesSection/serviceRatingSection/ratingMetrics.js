const metrics = [
  {
    title: "Work Quality",
    averageRating: 5,
    currentRating: 4,
  },
  {
    title: "Communication & Collaboration",
    averageRating: 5,
    currentRating: 4,
  },
  {
    title: "Adherence to Schedule",
    averageRating: 5,
    currentRating: 4,
  },
];

class RatingMetrics extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  getMetricsElements() {
    let metricElements = "";
    metrics.forEach((metric) => {
      const metricEl = `<rating-metric-item title="${metric.title}" averageRating="${metric.averageRating}" currentRating="${metric.currentRating}"></rating-metric-item>`;
      metricElements = metricElements + metricEl;
    });
    return metricElements;
  }

  render() {
    this.innerHTML = `
      <div class="metrics-container">${this.getMetricsElements()}</div>
    `;
  }
}

export default RatingMetrics;
