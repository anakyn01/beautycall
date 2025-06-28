import {Tabs,Tab} from 'react-bootstrap';
import KakaoMap from './KakaoMap';

function Point() {
  return (
    <>
    <div className='bg-white wrap'>
   <KakaoMap/>

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
</div>
    </>
  );
}

export default Point;