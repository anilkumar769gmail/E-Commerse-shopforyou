const mongoose = require('mongoose')

const productSchema =  new mongoose.Schema({

    name:{
        type: String,
        required:[true, 'Please enter product name'],
        trim: true,
        maxlength:[100, 'Product length can not exceeed 100 characters']
    },
    price:{
        type: Number,
        required:[true, 'Please enter price'],
        maxlength:[10, 'Product price can not exceeed 10 digits'],
        default:0.0
    },
    description:{
        type: String,
        required:[true, 'Please enter product description']
    },
    ratings:{
        type:Number,
        default: 0
    },
    images:[
        {
            public_id: {
                type: String,
                required: true
            },
            url:{
                type: String,
                required:true
            }
        }
    ],
    category:{
        type: String,
        required:[true, 'Please select category for this product'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Clothes/Shoes',
                'Beauty/Health',
                'Books',
                'Sports',
                'Outdoor',
                'Home',
                'Furnitures'
            ],
            message: 'Please select the correct category for this product'
        }
    },
    seller:{
        type: String,
        required:[true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required:[true, 'Please enter product stock'],
        maxLenght:[5, 'Product number can not exceed 5 digits'],
        default:0
    },
    numofReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name:{
                type: String,
                require: true
            },
            rating: {
                type: Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Products', productSchema);