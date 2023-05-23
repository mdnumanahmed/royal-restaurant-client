import bg1 from '../../../assets/home/chef-service.jpg'

const AdBox = () => {
    return (
        <div className={`py-32 px-28`} style={{backgroundImage: `url('${bg1}')`, backgroundPosition: 'center bottom', backgroundAttachment: 'fixed'}}>
            <div className="py-24 px-40 text-center bg-white">
                <h2 className="text-4xl uppercase">Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default AdBox;