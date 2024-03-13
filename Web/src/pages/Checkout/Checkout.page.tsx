import {useState} from "react";

export const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('');


    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-lg text-center bg-primary-green text-white font-semibold mb-3">PAIEMENT</h2>
                <form>
                    {/* Payment methods */}
                    <div>
                        <div className="flex flex-col mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="paymentMethod"
                                    value="atPickup"
                                    onChange={e => setPaymentMethod(e.target.value)}
                                />
                                <span className="ml-2">Payer à la récupération de la commande</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="paymentMethod"
                                    value="byCard"
                                    onChange={e => setPaymentMethod(e.target.value)}
                                />
                                <span className="ml-2">Payer par carte bancaire</span>
                            </label>
                        </div>
                        
                        {/* Card details */}
                        {paymentMethod === 'byCard' && (
                            <div className="flex flex-col mb-4">
                                <label className="block mb-2">Carte sauvegardée</label>
                                <select className="form-select mb-4">
                                    <option>Mastercard se termine par [derniers chiffres]</option>
                                </select>
                                <input className="mb-4 form-input" placeholder="Nom sur la carte"/>
                                <input className="mb-4 form-input" placeholder="Numéro de la carte"/>
                                <div className="flex gap-4">
                                    <input className="form-input w-16" placeholder="MM"/>
                                    <span>/</span>
                                    <input className="form-input w-16" placeholder="YY"/>
                                    <input className="form-input w-16" placeholder="CVC"/>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center">
                        <button className="bg-gray-200 px-4 py-2">annuler</button>
                        <button className="form-button">Commander</button>
                    </div>
                </form>
            </div>
            <div className="w-full text-center md:w-1/2 p-4">
                <h2 className="text-lg bg-primary-green text-white font-semibold mb-3">VOTRE COMMANDE</h2>
                <div className="flex justify-between items-center font-semibold p-2">
                    <span>Total</span>
                    <span>[prix total] euros</span>
                </div>
            </div>
        </div>
    );
};