import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('display image for each scoop option from server', async() =>{
    render(<Options optionType={'scoops'}/>);

    //find images
    const scoopImages = await screen.findAllByRole('img',{name:/scoop$/i});
    expect(scoopImages).toHaveLength(2);

    //confirm all text of images
    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual(['Chocolate scoop','Vanilla scoop'])
});

test('display image for each toppings option from server', async() =>{
    render(<Options optionType={'toppings'}/>);

    const images = await screen.findAllByRole('img',{name:/topping$/i});
    expect(images).toHaveLength(3);

    const imageTitle = images.map(img => img.alt);
    expect(imageTitle).toStrictEqual([
        'Cherries topping',
        'M&Ms topping',
        'Hot fudge topping'
    ]);
})