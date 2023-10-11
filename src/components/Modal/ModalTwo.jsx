import modalClose from '@assets/images/close-svg.svg'
import '@assets/scss/modal/modal.scss';

const Modal = ({active,setActive}) => {
    return ( 
        <>
        <div onClick={()=> {
                    document.body.classList.remove('modal-open') 
                    setActive(false)
                }
            } className={active ? "modal__wrapper active" : "modal__wrapper"}>
            <div onClick={e => e.stopPropagation()}  class="modal">
            <div className="modal__top">
                <div class="modal__title"><span>Reinvestment</span> </div>
                <div onClick={()=> {
                    document.body.classList.remove('modal-open') 
                    setActive(false)
                }
            } class="modal__close"><img src={modalClose} alt="" /></div>
            </div>
            <div class="modal__body">
            <table>
                <tbody>
                    <tr>
                        <td>Available</td>
                        <td className='d-flex-m-auto'><span>0 Fertilizers</span></td>
                    </tr>
                </tbody>
            </table>
            <form action="">
                <input type="text" />
                <div>
                    <button type='subbmit'>Reinvest</button>
                </div>
            </form>
            <div className="modal__body__footer">
                <p>The withdrawa of profits is instantaneous. Minimum amount is 1.01 Lamon. Minimum reinvestment amount is 10 Lamon.</p>
                <h2>1 USDT = 1 Lamon</h2>
                <p className='p-top'>To withdraw your income, specify the desired value and click "Withdraw" button</p>
                <p className='p-top'>The maximum withdrawal of funds is unlimited. Profit withdrawal is available every day.</p>
            </div>
            </div>
            </div>
        </div> 
        </>
     );
}
 
export default Modal;