app.component('review-list', {
    props: {
        reviews: {
            type: Array,
        required: true
        } 
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
    <table>
        <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Period</th>
            <th>Drop In</th>
        </tr>
        <tr v-for="(review, index) in reviews" :key="index">
            <td>{{ review.name }}</td>
            <td>{{review.review }}</td>
            <td>{{ review.rating }}</td>
            <td>{{ review.recommend }}</td>
        </tr>
    </table>    
    
    </div>
    `
})