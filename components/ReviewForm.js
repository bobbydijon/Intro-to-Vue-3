app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Id:</label>
        <input id="name" v-model="name">

        <label for="review">Student:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Period:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recommend">Drop In</label>
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Submit"> 
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
                alert('Review is incomplete, please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review, 
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted', productReview)
    
            this.name = ''
            this.review = ''
            this.rating = ''
            this.recommend = ''
        }
        
    }
})