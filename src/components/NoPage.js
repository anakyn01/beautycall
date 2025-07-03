import {Nav,Carousel,Tabs,Tab} from 'react-bootstrap';

function NoPage() {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/237/600/400"
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1025/600/400"
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1003/600/400"
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <Tabs
      defaultActiveKey="call"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="call" title="call">
        <p className='p-2'>Tab content for Home</p>
      </Tab>
      <Tab eventKey="ok" title="ok">
        <p className='p-2'>Tab content for Profile</p>
      </Tab>
      <Tab eventKey="point" title="point">
        <p className='p-2'>Tab content for Loooonger Tab</p>
      </Tab>
      <Tab eventKey="charge" title="charge">
        <p className='p-2'>Tab content for Contact</p>
      </Tab>
      <Tab eventKey="edu" title="Edu">
        <p className='p-2'>Tab content for Contact</p>
      </Tab>
    </Tabs>

    </>
  );
}

export default NoPage;