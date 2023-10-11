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
                <div class="modal__title"><span>Deposit</span> </div>
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
                        <th></th>
                        <th>Now</th>
                        <th>Will be</th>
                    </tr>
                    <tr>
                        <td>Wallet balance</td>
                        <td><span>0 USDT</span></td>
                        <td><span>0 USDT</span></td>
                    </tr>
                    <tr>
                        <td>Deposit</td>
                        <td><span>0 USDT</span></td>
                        <td><span>40 USDT</span></td>
                    </tr>
                    <tr>
                        <td>Plantation</td>
                        <td><span>0 Ha.</span></td>
                        <td><span>40 Ha.</span></td>
                    </tr>
                    <tr>
                        <td>Daily profit</td>
                        <td><span>0 USDT</span></td>
                        <td><span>0 USDT</span></td>
                    </tr>
                </tbody>
            </table>
            <form action="">
                <input type="text" />
                <button type='subbmit'>Deposit</button>
            </form>
            <div className="modal__body__footer">
                <p>The minimum amount is 40 USDT. The maximum total amount is 5000 USDT</p>
            </div>
            </div>
            </div>
        </div> 
        </>
     );
}
 
export default Modal;