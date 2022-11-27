import styles from './Pay.module.css'

import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51M8AkHEABWi1g5gXAgh6205mEyhLIXyPQHprOkk1PlkwdW1PDByEXschRUGEyHycdMQhnAV3jLW8pmx0nx8JcjXr0074YXLblW"

function Pay() {

    const navigate = useNavigate();

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                )
                console.log(res.data)
                navigate("/success");
            } catch (error) {
                console.log(error)
            }
        }
        if (stripeToken) {
            makeRequest()
        }
    }, [stripeToken, navigate])

    return (
        <div className={styles.container}>
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name="Victor Shop"
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button className={styles.btn}>Pay now</button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay