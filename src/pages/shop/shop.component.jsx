import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
    constructor(probs) {
        super(probs);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state;
        return <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProbs }) => (
                <CollectionPreview key={id} {...otherCollectionProbs} />
            ))
        }
        </div>
    }
}

export default ShopPage;

