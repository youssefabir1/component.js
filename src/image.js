import product from './product';

function image() {
    return (
        <img src={product.image} alt={product.name} />
    );  
}

export default image;