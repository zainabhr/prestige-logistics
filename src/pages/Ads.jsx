// import summerOfferImg from '../assets/summer offer img.jpg'
import weekOfferImg from '../assets/week offer img.jpg'
import { useEffect, useState } from 'react';
import apiClient from '../services/api';
import { createPortal } from 'react-dom';


function Ads(){
    const [ads, setAds] = useState([])
    const [adTitle, setAdTitle] = useState('')
    const [adDescription, setAdDescription] = useState('')
    const [adImage, setAdImage] = useState(null)
    const [showModel, setShowModel] = useState(false)

    // console.log('البيانات المخزنة:', ads);
    
    const fetchAds = () => {
        apiClient.get('admin/all-ads').then(res =>{
            console.log('الرد الفعلي من السيرفر:', res.data);
            setAds(res.data)

        }).catch(err=>{
            console.log('error in fetching ads', err)
        })
    }

    const toggleModel = () =>{
        setShowModel(!showModel)
        window.scrollTo({top: '-95px' , behavior: 'smooth'})
    }

    const handleAddingAds = (event) =>{
        event.preventDefault()
        const formData = new FormData();
        formData.append('title', adTitle);
        formData.append('description',adDescription);
        if (adImage) {
            formData.append('image', adImage); 
        }
        apiClient.post('admin/ads/store-ads',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(res => {
            console.log('تمت إضافة الإعلان بنجاح', res.data)
            fetchAds()
            setAdTitle('')
            setAdDescription('')
            setAdImage(null)
        }).catch(err =>{
            console.error('حدث خطأ في إضافة الإعلان', err)
        })
        setShowModel(!showModel)
        
    }

    useEffect(() =>{
        fetchAds()
    },[])
    return(
        <section className="ads">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة الإعلانات</h2>
                    <p className="section-topic">تتبع وتحكم في جميع الحملات الإعلانية النشطة والمجدولة</p>
                </div>
                <button className="add-new-btn"
                onClick={toggleModel}
                >أضف إعلان جديد</button>

            </div>
            <div className="activity-summary">
                <div className="box">
                    <p className="text">إجمالي الإعلانات</p>
                    <p className="number">24</p>
                    <span style={{color: '#16A34A'}}>+4 هذا الشهر</span>
                </div>
                <div className="box">
                    <p className="text">الحملات النشطة</p>
                    <p className="number">12</p>
                        <span style={{color: '#64748B',}}>5 تنتهي قريباً</span>
                </div>
                <div className="box">
                    <p className="text">مرات الظهور</p>
                    <p className="number">1.2M</p>
                        <span style={{color: '#16A34A'}}>+12% زيادة</span>
                </div>
                <div className="box">
                    <p className="text">معدل النقرات</p>
                    <p className="number">4.8%</p>
                        <span style={{color: '#64748B',}}>متوسط الحملات</span>
                </div>                
            </div>
            <div className="ads-list">
                <h3>قائمة الإعلانات</h3>
                <table className='table-body'>
                    <tr>
                        <th>الصورة</th>
                        <th>العنوان</th>
                        <th>تاريخ البداية</th>
                        <th>تاريخ النهاية</th>
                        <th>الحالة</th>
                        <th>العمليات</th>
                    </tr>
                    {ads.map((ad)=>(
                        <tr key={ad.id}>
                            <td><img src={ad.image} alt="spring Offer Img" /></td>
                            <td>
                            <p>{ad.title}</p>
                            <span>#AD-{ad.id}</span>
                            </td>
                            <td>15 / 5 / 2024</td>
                            <td>15 / 8 / 2024</td>
                            <td><span className="table-status active">Active</span></td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        
                        </tr>

                    ))}
                    
                    <tr>
                        <td><img src={weekOfferImg} alt="week Offer Img" /></td>
                        <td>
                            <p>تخفيضات أسبوع اللوجستيات</p>
                            <span>#AD-99211</span>
                        </td>
                        <td>1 / 4 / 2024</td>
                        <td>15 / 4 / 2024</td>
                        <td><span className="table-status inactive">Inactive</span></td>
                        <td className="actions">
                            <i className="fas fa-ban"></i>
                            <i className="fas fa-pen"></i>
                        </td>
                    </tr>
                </table>
                <div className="table-footer">
                    <span>عرض 2 من أصل 20</span>
                    <span>
                        <button>السابق</button>
                        <button>1</button>
                        <button>2</button>
                        <button>التالي</button>
                    </span>
                </div>
            </div>
            {/* <div>{ads}</div> */}
            {showModel && createPortal(
                <div className="overlay">
                    <div className="modal-content">
                        
                        <h2> إضافة إعلان جديد  </h2>
                        <button 
                        className="close"
                        onClick={() => setShowModel(!showModel)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <form onSubmit={handleAddingAds}>
                            <label htmlFor="ad-title"> عنوان الإعلان  </label>
                            <input 
                            type="text" 
                            name="ad-title" 
                            id="ad-title"
                            onChange={(e)=> setAdTitle(e.target.value)}
                            />
                            <label htmlFor="ad-description"> وصف الإعلان  </label>
                            <textarea
                            name="ad-description" 
                            id="ad-description"
                            onChange={(e)=> setAdDescription(e.target.value)}
                            ></textarea>
                            <label htmlFor="ad-image"> صورة الإعلان </label>
                            <input 
                            type="file" 
                            name="ad-image" 
                            id="ad-image" 
                            accept='image/*'
                            onChange={(e)=> setAdImage(e.target.files[0])}
                            />
                            <button type='submit'>أضف الإعلان</button>
                        </form>
                    </div>               
                </div>,document.body
            )}
        </section>
    )
}

export default Ads;