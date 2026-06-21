import profileImg1 from '../assets/profile img 1.jpg'
import profileImg2 from '../assets/profile img 2.jpg'
import profileImg3 from '../assets/profile img 3.jpg'
import profileImg4 from '../assets/profile img 4.jpg'

function Users(){
    return(
        <section className="users">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة المستخدمين</h2>
                    <p className="section-topic">إجمالي المستخدمين المسجلين: <span style={{fontWeight:'bold',color: '#000'}}>1,284 مستخدم</span></p>
                </div>
                <button className="add-new-btn"><i class="add-user-icon fas fa-user-plus"></i>  إضافة مستخدم جديد</button>

            </div>
            <form action="">
                <div>
                    <label htmlFor="username">البحث عن مستخدم</label>
                    {/* <i className="fas fa-search"></i> */}
                    <input type="text" name="username" id="username" placeholder="الاسم، البريد الالكتروني، أو رقم الجوال" />
                </div>
                <div>
                    <label htmlFor="cityFilter">تصفية حسب المدينة</label>
                    <select id="cityFilter"  name='cityFilter' defaultValue=''>
                        <option value="جميع المدن" >جميع المدن</option>
                        <option value="جدة">جدة</option>  
                        <option value="الرياض">الرياض</option>
                        <option value="الدمام">الدمام</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="stateFilter">الحالة</label>
                    <select id="stateFilter"  name='stateFilter' defaultValue=''>
                        <option value="الكل" >الكل</option>
                        <option value="نشط">نشط</option>  
                        <option value="معطل">معطل</option>
                    </select>
                </div>
                <button className="filter-btn">تصفية النتائج</button>
            </form>
            <div className="users-list">
                <table className='table-body'>
                    <tr>
                        <th>الاسم</th>
                        <th>الهاتف</th>
                        <th>الايميل</th>
                        <th>المدينة</th>
                        <th>الحالة</th>
                        <th>تاريخ التسجيل</th>
                        <th>العمليات</th>
                    </tr>
                    <tr>
                        <td>
                            <div className='img-container'>
                                <img src={profileImg1} alt="profileImg1" />
                                <div>
                                    <h3>محمد العتيبي</h3>
                                    <p>USR-8821</p>
                                </div>
                            </div>
                        </td>
                        <td>050XXXXX91</td>
                        <td>m.otaibi@example.com</td>
                        <td>الرياض</td>
                        <td>نشط</td>
                        <td>15 / 5 / 2023</td>
                        <td>
                            <i class="fas fa-pen"></i>      
                            <i class="fas fa-ban"></i>      
                            <i class="fas fa-eye"></i>  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='img-container'>
                                <img src={profileImg2} alt="profileImg2" />
                                <div>
                                    <h3>سارة الشمري</h3>
                                    <p>#USR-9912</p>
                                </div>
                            </div>
                        </td>
                        <td>050XXXXX44</td>
                        <td>s.shammari@example.com</td>
                        <td>جدة</td>
                        <td>معطل</td>
                        <td>28 / 5 / 2023</td>
                        <td>
                            <i class="fas fa-pen"></i>      
                            <i class="fas fa-ban"></i>      
                            <i class="fas fa-eye"></i>  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='img-container'>
                                <img src={profileImg3} alt="profileImg3" />
                                <div>
                                    <h3>خالد الغامدي</h3>
                                    <p>#USR-7734</p>
                                </div>
                            </div>
                        </td>
                        <td>050XXXXX21</td>
                        <td>k.ghamdi@example.com</td>
                        <td>الدمام</td>
                        <td>نشط</td>
                        <td>5 / 10 / 2023</td>
                        <td>
                            <i class="fas fa-pen"></i>      
                            <i class="fas fa-ban"></i>      
                            <i class="fas fa-eye"></i>  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='img-container'>
                                <img src={profileImg4} alt="profileImg4" />
                                <div>
                                    <h3>ريم القحطاني</h3>
                                    <p>#USR-6651</p>
                                </div>
                            </div>
                        </td>
                        <td>050XXXXX32</td>
                        <td>r.qahtani@example.com</td>
                        <td>الدمام</td>
                        <td>نشط</td>
                        <td>18 / 12 / 2023</td>
                        <td>
                            <i class="fas fa-pen"></i>      
                            <i class="fas fa-ban"></i>      
                            <i class="fas fa-eye"></i>  
                        </td>
                    </tr>
                </table>
                <div className="table-footer">
                    <span>عرض 4 من أصل 1284 مستخدم </span>
                    <span>
                        <button>السابق</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>التالي</button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Users;