import Carousel from 'react-bootstrap/Carousel'

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://desarrollodesitios0.site/protur/public/lugares/Catamarca/large/3.jpg" alt="Slide 1" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://desarrollodesitios0.site/protur/public/lugares/Catamarca/large/4.jpg" alt="Slide 2" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://img.freepik.com/foto-gratis/rio-montanas-orilla-rocosa-pirineos_1398-5036.jpg?w=996&t=st=1698540739~exp=1698541339~hmac=44725eeb929a02e95825506adbab20c6a484232ec5288903802059fad77727f0" alt="Slide 3" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselHome