import { createPortal } from 'react-dom';
import profileImg from '../assets/promo-profile-image.jpg'
import apiClient from '../services/api';
import { useEffect, useState } from 'react';


// {
//     "code":"jamal1234",
//     "discount_type":"percentage",
//     "discount_value":20,
//     "min_order_value":1000000,
//     "max_uses":10,
//     "expiry_date":"2026-10-02"
// }

function PromoCodes(){
    const [promos, setPromos] = useState([])
    const [promoCode, setPromoCode] = useState('')
    const [discountType, setDiscountType] = useState('')
    const [minOrderValue, setMinOrderValue] = useState('')
    const [promoMaxUses, setPromoMaxUses] = useState()
    const [promoExpiryDate, setPromoExpiryDate] = useState()
    const [discountValue, setDiscountValue] = useState(null)
    const [showModel, setShowModel] = useState(false)

    // console.log('البيانات المخزنة:', ads);
    
    const fetchPromos = () => {
        apiClient.get('admin/getPromoCode').then(res =>{
            console.log('الرد الفعلي من السيرفر:', res.data.data);
            setPromos(res.data.data)

        }).catch(err=>{
            console.log('error in fetching ads', err)
        })
    }

    const toggleModel = () =>{
        setShowModel(!showModel)
    }

    const handleAddingPromo = (event) =>{
        event.preventDefault()

        const promoCodeData = {
            "code": promoCode,
            "discount_type": discountType,
            "discount_value": discountValue,
            "min_order_value": minOrderValue,
            "max_uses": promoMaxUses,
            "expiry_date": promoExpiryDate
        }
        
    
        apiClient.post('admin/AddPromoCode',promoCodeData)
        .then(res => {
            console.log('تمت إضافة الكود بنجاح', res.data)
            fetchPromos()
            setPromoCode('')
            setMinOrderValue('')
            setDiscountType('')
            setPromoMaxUses('')
            setPromoExpiryDate('')
            setDiscountValue('')
        }).catch(err =>{
            console.error('حدث خطأ في إضافة كود الخصم', err)
        })
        setShowModel(!showModel)
        
    }


    const deletePromoCode = (id) =>{
        apiClient.delete(`admin/DeletePromoCode/${id}`)
        .then(res =>{
            console.log('تم حذف الكود بنجاح', res.data)
            fetchPromos()

        }
        ).catch(err =>
            console.error('حدث في عملية الحذف',err)
        )
    }

    useEffect(() =>{
        fetchPromos()
    },[])
    return(
        <section className="promo-codes">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title"> إدارة أكواد الخصم </h2>
                    <p className="section-topic"> إدارة وتتبع فعالية الحملات الترويجية وقسائم الشراء </p>
                </div>
                <button 
                onClick={toggleModel}
                className="add-new-btn"> إضافة كود جديد + </button>

            </div>
            <div className="activity-summary">
                <div className="box">
                    <p className="text"> إجمالي الأكواد </p>
                    <p className="number">124</p>
                </div>
                <div className="box">
                    <p className="text">الأكواد النشطة </p>
                    <p className="number">86</p>
                </div>
                <div className="box">
                    <p className="text">إجمالي الاستخدام </p>
                    <p className="number">1420</p>
                </div>
                <div className="box">
                    <p className="text">معدل التحويل</p>
                    <p className="number">24.5%</p>
                </div>
            </div>
                <div className="table-box">
                    <div className="table-header">
                        <h3>قائمة الأكواد</h3>
                        <div className="header-icons">
                            <i className="fas fa-filter"></i>
                            <i className="fas fa-download"></i>
                        </div>
                    </div>
                    <table className='table-body'>
                            <tr>
                                <th>الكود</th>
                                <th>نسبة الخصم</th>
                                <th>عدد الاستخدام</th>
                                <th>تاريخ الانتهاء</th>
                                <th>الحالة</th>
                                <th>العمليات</th>
                            </tr>
                            {promos.map((promo)=>(
                                <tr key={promo.id}>
                                    <td><span>{promo.code}</span></td>
                                    <td><span >
                                        {promo.discount_type === 'percentage'? `${promo.discount_value}%` : promo.discount_value}
                                    </span></td>
                                    <td>{promo.min_order_value} /{promo.max_uses}</td>
                                    <td>{promo.expiry_date}</td>
                                    <td><span className="table-status active"> نشط </span></td>
                                    <td className="actions">
                                        <i className="fas fa-trash-alt"
                                        onClick={() => deletePromoCode(promo.id)}
                                        ></i>
                                        <i className="fas fa-ban"></i>
                                        <i className="fas fa-pen"></i>
                                    </td>
                                </tr>

                    ))}
                            <tr>
                                <td><span>SUMMER20</span></td>
                                <td><span >20%</span></td>
                                <td>450 / 500</td>
                                <td>2024/09/30</td>
                                <td><span className="table-status active"> نشط </span></td>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-ban"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td><span>PRESTIGE50</span></td>
                                <td><span >50%</span>(الحد اليومي)</td>
                                <td>1,200</td>
                                <td>2024/12/31</td>
                                <td><span className="table-status active"> نشط </span></td>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-ban"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td><span>FIRSTORDER</span></td>
                                <td>
                                        <span >15%</span>(أول طلب فقط)
                                </td>
                                <td>890 / 1,000</td>
                                <td>2024/01/01</td>
                                <span className="table-status inactive"> غير نشط </span>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-circle-check"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                    </table>
                    <div className="table-footer">
                        <span>عرض 3 من أصل 124 كود </span>
                        <span>
                            <button>السابق</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>التالي</button>
                        </span>
                    </div>
            </div>
            <div className="promo-analysis">
                <div className="analysis">
                    <p className="title">تحليل أداء الحملات</p>
                    <p>اكتشف أي الأكواد تحقق أعلى نسبة مبيعات وأفضل وصول للعملاء</p>
                    <button>مشاهدة التقرير</button>
                </div>
                <div className="promo-advice">
                    <div className='icon'>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <p className="title">نصيحة خبير</p>
                        <p>"تفعيل الأكواد لفترات محدودة (Flash Sales) يرفع معدل التحويل بنسبة تصل
                            إلى 40% مقارنة بالأكواد الدائمة."</p>
                    </div>
                    <div className="img-container">
                        <img src={profileImg} alt="profile img" />
                        <div>
                            <h3>أحمد سامي</h3>
                            <p>مستشار تسوق لوجيستي</p>
                        </div>
                    </div>
                </div>
            </div>

            {showModel && createPortal(
                <div className="overlay">
                    <div className="modal-content">
                        
                        <h2> إضافة كود خصم جديد  </h2>
                        <button 
                        className="close"
                        onClick={() => setShowModel(!showModel)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <form onSubmit={handleAddingPromo}
                        style={{display: 'grid',gridTemplateColumns: '1fr 1fr',columnGap: '10px'}}
                        >
                            <label htmlFor="promo-code"> كود الخصم   </label>
                            <input 
                            type="text" 
                            name="promo-code" 
                            id="promo-code"
                            onChange={(e)=> setPromoCode(e.target.value)}
                            required
                            />
                            <label htmlFor="promo-discount_type"> نسبة الخصم   </label>
                            <select 
                            name="promo-discount_type" 
                            id="promo-discount_type"
                            onChange={(e)=> setDiscountType(e.target.value)}
                            required
                            >
                                <option value=""> اختر نسبة</option>
                                <option value="percentage">percentage</option>
                                <option value="fixed">fixed</option>
                            </select>
                            <label htmlFor="promo-discount_value"> قيمة الخصم   </label>
                            <input 
                            type="number" 
                            name="promo-discount_value" 
                            id="promo-discount_value"
                            onChange={(e)=> setDiscountValue(e.target.value)}
                            required
                            />
                            <label htmlFor="promo-min_order_value">  الحد الأدنى لقيمة الطلب   </label>
                            <input 
                            type="number" 
                            name="promo-min_order_value" 
                            id="promo-min_order_value"
                            onChange={(e)=> setMinOrderValue(e.target.value)}
                            required
                            />
                            <label htmlFor="promo-max-uses"> الحد الأقصى لاستخدام الخصم   </label>
                            <input 
                            type="number" 
                            name="promo-max-uses" 
                            id="promo-max-uses"
                            onChange={(e)=> setPromoMaxUses(e.target.value)}
                            required
                            />
                            <label htmlFor="promo-code-expiry">   تاريخ انتهاء صلاحية الخصم  </label>
                            <input 
                            type="date" 
                            name="promo-code-expiry" 
                            id="promo-code-expiry"
                            onChange={(e)=> setPromoExpiryDate(e.target.value)}
                            required
                            />
                            <button 
                            style={{gridColumn: '1 / span 2'}} 
                            type='submit'>أضف الكود</button>
                        </form>
                    </div>               
                </div>,document.body
            )}
        </section>
    )
}

export default PromoCodes;