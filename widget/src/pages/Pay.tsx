import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Pay = () => {

    const STRIPE_KEY="pk_test_51HJeIvG86QdLQN5IrEoHLvTBgpHu26JhBVQRX7xS7Y22rdxPk0ATIchnAX0h0Ff6bdfdWrN9OxSujjr5DlJoLTe0001hwV76cr"

    const [stripeToken, setStripeToken] = useState({id: ""})

    const navigate = useNavigate()

    const onToken = (token: any) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                            tokenId: stripeToken.id,
                            amount: 2000,
                         }
                    )
                console.log(res.data)
                navigate("/success")
            }catch (e){
                console.log(e)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, navigate])

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {stripeToken ?
                (<span>Processing. Please wait...</span>)
                : (
                    <StripeCheckout
                        image="https://i.graphicmama.com/blog/wp-content/uploads/2020/03/04133345/QA-Monogram.png"
                        billingAddress
                        shippingAddress
                        description="TOTAL IS 20$"
                        amount={2000}
                        token={onToken}
                        stripeKey={STRIPE_KEY}>
                        <button
                            style={{
                                border: "none",
                                width: 120,
                                borderRadius: 5,
                                padding: "20px",
                                backgroundColor: "black",
                                color: "orange",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}>
                            Pay Now
                        </button>
                    </StripeCheckout>
                )}
        </div>
    );
};

export default Pay;