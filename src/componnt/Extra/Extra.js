import React from 'react';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png'

const Extra = () => {
    return (
        <div>
            <div class="container px-4 w-75">
  <div class="row gx-5">
    <div class="col-sm-12 col-md-6 col-lg-4">
     <div class="p-3 border t d-flex">
         <div>
         <img className
         ="img-fluid" src={icon1} alt="" />
         </div>
         <div>
             <h5 className='text-primary'>General Treatment</h5>
             <p>Oral health is an essential component of general health. In fact, medical research has revealed links between common oral infections</p>
         </div>
     </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="p-3 border d-flex ">
      <div>
         <img className
         ="img-fluid" src={icon2} alt="" />
         </div>
         <div>
             <h5 className='text-primary'>Teeth Whitening</h5>
             <p>In-office bleaching provides the quickest way to whiten teeth. With in-office bleaching, the whitening product is applied directly to the teeth</p>
         </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="p-3 border d-flex">
      <div>
         <img className
         ="img-fluid" src={icon3} alt="" />
         </div>
         <div>
             <h5 className='text-primary'>Heart Surgery</h5>
             <p>Cardiac surgery, or cardiovascular surgery, is surgery on the heart or great cardiovascular vessels performed by cardiovascular cardiac surgeons

</p>
         </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Extra;