import { getFileURL } from "../../../helpers/utils";

const janeSmithProfilePic = getFileURL("/services/jane-smith.png");

const defaultReview = {
  image: janeSmithProfilePic,
  name: "Jane Smith",
  rating: 4,
  review:
    "Do occaecat deserunt velit ut. Est nulla in elit do aute amet. Occaecat occaecat culpa exercitation enim consequat sit voluptate cupidatat qui fugiat mollit dolor cillum mollit. Amet nisi dolore ad do velit. Ullamco officia labore commodo quis ad velit id. Amet minim irure pariatur fugiat. Velit proident incididunt esse et. Sit elit laboris commodo aute anim Lorem velit non elit mollit veniam ipsum qui. Anim in incididunt aliquip elit duis quis laborum. Consectetur laborum dolor aliquip eiusmod culpa amet mollit veniam tempor. Veniam consequat qui labore pariatur do dolore esse quis. Adipisicing fugiat commodo esse culpa irure voluptate veniam reprehenderit incididunt. Amet ex tempor sunt ex est sint. Irure minim non duis ullamco tempor fugiat mollit quis non consectetur velit consectetur aliquip eu.",
};

const reviewsArr = [
  {
    image: janeSmithProfilePic,
    name: "Jane Smith",
    rating: 4,
    review:
      "Do occaecat deserunt velit ut. Est nulla in elit do aute amet. Occaecat occaecat culpa exercitation enim consequat sit voluptate cupidatat qui fugiat mollit dolor cillum mollit. Amet nisi dolore ad do velit. Ullamco officia labore commodo quis ad velit id. Amet minim irure pariatur fugiat. Velit proident incididunt esse et. Sit elit laboris commodo aute anim Lorem velit non elit mollit veniam ipsum qui. Anim in incididunt aliquip elit duis quis laborum. Consectetur laborum dolor aliquip eiusmod culpa amet mollit veniam tempor. Veniam consequat qui labore pariatur do dolore esse quis. Adipisicing fugiat commodo esse culpa irure voluptate veniam reprehenderit incididunt. Amet ex tempor sunt ex est sint. Irure minim non duis ullamco tempor fugiat mollit quis non consectetur velit consectetur aliquip eu.",
  },
  {
    image: janeSmithProfilePic,
    name: "Jane Smith",
    rating: 4,
    review:
      "Do occaecat deserunt velit ut. Est nulla in elit do aute amet. Occaecat occaecat culpa exercitation enim consequat sit voluptate cupidatat qui fugiat mollit dolor cillum mollit. Amet nisi dolore ad do velit. Ullamco officia labore commodo quis ad velit id. Amet minim irure pariatur fugiat. Velit proident incididunt esse et. Sit elit laboris commodo aute anim Lorem velit non elit mollit veniam ipsum qui. Anim in incididunt aliquip elit duis quis laborum. Consectetur laborum dolor aliquip eiusmod culpa amet mollit veniam tempor. Veniam consequat qui labore pariatur do dolore esse quis. Adipisicing fugiat commodo esse culpa irure voluptate veniam reprehenderit incididunt. Amet ex tempor sunt ex est sint. Irure minim non duis ullamco tempor fugiat mollit quis non consectetur velit consectetur aliquip eu.",
  },
  {
    image: janeSmithProfilePic,
    name: "Jane Smith",
    rating: 4,
    review:
      "Do occaecat deserunt velit ut. Est nulla in elit do aute amet. Occaecat occaecat culpa exercitation enim consequat sit voluptate cupidatat qui fugiat mollit dolor cillum mollit. Amet nisi dolore ad do velit. Ullamco officia labore commodo quis ad velit id. Amet minim irure pariatur fugiat. Velit proident incididunt esse et. Sit elit laboris commodo aute anim Lorem velit non elit mollit veniam ipsum qui. Anim in incididunt aliquip elit duis quis laborum. Consectetur laborum dolor aliquip eiusmod culpa amet mollit veniam tempor. Veniam consequat qui labore pariatur do dolore esse quis. Adipisicing fugiat commodo esse culpa irure voluptate veniam reprehenderit incididunt. Amet ex tempor sunt ex est sint. Irure minim non duis ullamco tempor fugiat mollit quis non consectetur velit consectetur aliquip eu.",
  },
];

class ReviewSection extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  renderReviews() {
    let reviewsElements = "";
    reviewsArr.forEach((review) => {
      const reviewEl = `<review-item image="${review.image}" name="${review.name}" rating="${review.rating}" review="${review.review}"></review-item>`;
      reviewsElements = reviewsElements + reviewEl;
    });
    return reviewsElements;
  }

  postReview = () => {
    const textarea = this.querySelector("textarea");
    const value = textarea.value;
    if (value) {
      const newReview = {
        ...defaultReview,
        name: "Andrew Mead",
        review: value,
      };
      reviewsArr.push(newReview);
      this.render();
    }
  };

  render() {
    this.innerHTML = `
      <div class="review-section-container card-container">
        <div class="review-items-container">${this.renderReviews()}</div>

        <div class="post-review-container">
          <div>
            <img src="${janeSmithProfilePic}" alt="profile pic" />
          </div>

          <div class="form-container">
            <textarea placeholder="Write your review in here" rows="4"></textarea>
            <button class="primary-btn">Post Review</button>
          </div>
        </div>
      </div>
    `;

    const submitBtn = this.querySelector("button");
    submitBtn.addEventListener("click", this.postReview);
  }
}

export default ReviewSection;
