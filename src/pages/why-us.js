import { siteCard } from "../index";

export const whyUs = () => {
    const whyUsDiv = document.createElement('div');
    whyUsDiv.classList.add('page-container');
    whyUsDiv.classList.add('why-us-div');

    //const whyUsWrapper = document.createElement('div');
    //whyUsWrapper.classList.add('why-us-wrapper');


    const whyUsTitle = document.createElement('h2');
    whyUsTitle.classList.add('why-us-title');
    whyUsTitle.innerText = 'Why Us?';

    const whyUsInfo = document.createElement('p');
    whyUsInfo.classList.add('why-us-info');
    whyUsInfo.innerHTML = `Lorem ipsum dolor sit amet consectetur adipiscing, elit tortor condimentum justo lectus dignissim, litora euismod curabitur scelerisque eros. Orci taciti egestas turpis est inceptos semper pretium per, dapibus neque tortor fames dignissim ligula ad, viverra dui potenti nunc non mus lectus. Litora netus nostra et sagittis tellus nisl fames ultricies augue, fringilla eget suspendisse leo feugiat sociosqu mi enim inceptos, at praesent hac bibendum iaculis accumsan congue gravida.
    <br><br>
    Volutpat sodales ridiculus pretium phasellus vivamus taciti aenean auctor facilisis placerat, lectus sapien hac tristique ante aliquam gravida iaculis habitasse, risus ut ac nec accumsan curae proin laoreet curabitur. Hendrerit dapibus pulvinar tempor est aliquam vulputate nullam ligula hac, suspendisse feugiat ultrices dictum vivamus sem cum dis, massa iaculis netus gravida id suscipit vehicula quis. Nibh mattis justo malesuada lacus vehicula nisi at, maecenas tincidunt velit sapien rutrum arcu vulputate platea, tempus vel et ridiculus a senectus. Massa senectus dui tincidunt condimentum bibendum sagittis vel, nisl aliquet suscipit montes class justo vehicula molestie, lectus nascetur in himenaeos volutpat nostra.
    <br><br>
    Blandit mauris suscipit congue facilisi luctus eleifend primis montes proin, commodo ullamcorper velit volutpat rhoncus ultricies dapibus arcu lacus, auctor euismod sociosqu laoreet praesent accumsan quis gravida. Imperdiet pretium eget mollis donec facilisi diam, mauris libero ultricies praesent conubia, auctor dis lobortis litora ac. Vitae dapibus fames fusce quis proin lobortis ac sociis congue, feugiat egestas litora iaculis auctor a magna augue blandit, urna non ultrices sociosqu pretium placerat viverra penatibus.
    <br><br>
    Montes facilisi nisi arcu quis proin et tempor, facilisis massa ornare eget vivamus a, vestibulum mauris sollicitudin sociosqu risus diam. Integer iaculis cum nec augue tempus lacinia feugiat blandit, rutrum mollis sodales eros suscipit dictumst lectus, parturient posuere habitant etiam natoque per velit. Diam nam sed urna eleifend eu taciti curabitur, netus et sodales ultrices pharetra varius, tellus nibh nascetur aliquet fusce convallis.`;    
    
    const whyUsSignature = document.createElement('p');
    whyUsSignature.classList.add('why-us-signature');
    whyUsSignature.innerHTML = 'Sincerely,<br>Flowers'

    whyUsDiv.appendChild(whyUsTitle);
    whyUsDiv.appendChild(whyUsInfo);
    whyUsDiv.appendChild(whyUsSignature);

    siteCard.appendChild(whyUsDiv);
};