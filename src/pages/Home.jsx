import { Button, Carousel, Typography } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="container mx-auto flex gap-4 flex-col">
      <Carousel autoplay className="rounded-xl overflow-hidden">
          <img 
            src="https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/339408399_1399623710840709_8146755919179450984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=52f669&_nc_ohc=B05KHSBwdG4AX99XZRI&_nc_ht=scontent.fgza2-3.fna&oh=00_AfCk6co1anDYQpoxdnX0jsEwD_qjHS_VB_XnsCvea5Wfzg&oe=651064CB"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <img 
            src="https://scontent.fgza2-4.fna.fbcdn.net/v/t39.30808-6/311821678_483824103791795_7167324280596046071_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=05bb41&_nc_ohc=zq3NQ9OmFOcAX89UPQd&_nc_ht=scontent.fgza2-4.fna&oh=00_AfDs2kk-dkcIspMvNOvDOhRXjlB-2EdNJ3aCPfPQQgrp1A&oe=6511040C"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <img 
            src="https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/276300441_3106967736240652_3777193402845299161_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=52f669&_nc_ohc=D2RtTvXcyaEAX_6fALJ&_nc_ht=scontent.fgza2-3.fna&oh=00_AfB4sxf6NsOGSQRbvj7llUoN4yPEI8byJ_EzLeMMu7rs0A&oe=65106A5E"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <img 
            src="https://scontent.fgza2-4.fna.fbcdn.net/v/t1.6435-9/74398552_2419976171606482_1918685702145441792_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fZN3RQUoX20AX_lM03G&_nc_ht=scontent.fgza2-4.fna&oh=00_AfD85b6P5XdqXK7n_G6gb3xhjHhCIqQ_QjYprrpkOpgsBQ&oe=6532E0F1"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <img 
            src="https://scontent.fgza2-4.fna.fbcdn.net/v/t39.30808-6/379335728_691976149643255_1958721230961905343_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=554p_0f7NVUAX_xiZGl&_nc_oc=AQkZ2o_ZRluYZ6ZXCZBOw7MNKcXfzuIwQfduTzqyKaEYxVvo0_pJKQMRvVD8PdfdMKM&_nc_ht=scontent.fgza2-4.fna&oh=00_AfCfgx57HrFagN6DgDGNtsuSJJoxYYB8O9iFX03W9wAH4g&oe=6510D6C8"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <img 
            src="https://scontent.fgza2-4.fna.fbcdn.net/v/t39.30808-6/379403781_691976166309920_6266672661622299178_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=oGflhXG0r6UAX8KvAMu&_nc_ht=scontent.fgza2-4.fna&oh=00_AfCX4UFMT6q5gMlL3OCze_VM4wR5V8YWvPDXj8RI5zEz3A&oe=6510DE21"
            alt="طلاب العمل التطوعي"
            className="w-full h-96 object-cover hover:scale-125 transition-all duration-500 ease-in-out"
          />
      </Carousel>
      <div className="flex-1 relative -top-44 py-16">
        <img 
          src="https://scontent.fgza2-5.fna.fbcdn.net/v/t39.30808-6/277101368_3107507476186678_5374119975867021216_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=9I_VNcEwb1UAX9d0YXT&_nc_ht=scontent.fgza2-5.fna&oh=00_AfAO8LwdJOsy0uzII6tJ59Cya3ekAv_REedOatAPCGUf4g&oe=651093CA" 
          alt="logo" 
          className="mx-5 w-56 border-[1rem] border-gray-100 mb-8 rounded-full overflow-hidden"
        />
        <Typography.Title level={1} className="!mb-12">
          قسم الأنشطة اللامنهجية و العمل التطوعي - عمادة شؤون الطلبة
        </Typography.Title>
        <Typography.Text className="w-fit block relative !text-xl bg-neutral-100 p-6 rounded-md border border-b-4 border-gray-300">
          <p className="select-none text-8xl leading-[0px] absolute top-7 right-6 text-gray-500">"</p>
          التطوع هو قيمة وسلوك أي جهد وعمل يبذله الفرد دون انتظار عائد ويشعر بالسعادة تجاه ذلك
        </Typography.Text>

        <Link to="/std">
        <Button type="primary" size="large" className="block mt-12" icon={<ArrowLeftOutlined />}>
          متابعة
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home