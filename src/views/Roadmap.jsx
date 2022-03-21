import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {useSession} from "../contexts/SessionContext";


export default function Roadmap() {

    const navigate = useNavigate()
    const {session} = useSession()

    const [state, setState] = useState(JSON.parse(localStorage.getItem('test')) || {
            onePointOne: "",
            b: "",
            c: "",
            e: "",
            f: "",
            g: "",
            onePointTwo: "",
            onePointThree: "",
            twoPointOne: "",
            twoPointTwo: "",
            twoPointThree: "",
            threePointOne: "",
            threePointTwo: "",
            threePointThree: "",
            fourPointOne: "",
            fourPointTwo: "",
            fourPointThree: "",
            fivePointOne: "",
            fivePointTwo: "",
            fivePointThree: "",
            fivePointFour: "",
            sixPointOne: ""
        }
    );

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    useEffect(() =>{
        localStorage.setItem('test', JSON.stringify(state));
    }, [state]);

    const backToGame = () => {
        navigate(`/game/${session.id}`)
    }


    return (
        <div>
            <h1>Roadmap</h1>
            <form>
                <h3>Etape 1. Elaboration et planification de projet</h3>
                <label>1.1
                    <input type="text" name="onePointOne" value={state.onePointOne} onChange={handleChange}/>
                </label><br/>
                <label>A. Informations administratives</label><br/>
                <label>B.
                    <input type="text" name="b" value={state.b} onChange={handleChange}/>
                </label><br/>
                <label>C.
                    <input type="text" name="c" value={state.c} onChange={handleChange}/>
                </label><br/>
                <label>D. Ethique et conformité légale</label><br/>
                <label>E.
                    <input type="text" name="e" value={state.e} onChange={handleChange}/>
                </label><br/>
                <label>F.
                    <input type="text" name="f" value={state.f} onChange={handleChange}/>
                </label><br/>
                <label>G.
                    <input type="text" name="g" value={state.g} onChange={handleChange}/>
                </label><br/>
                <label>H. Responsabilités et ressources</label><br/>
                <label>1.2
                    <input type="text" name="onePointTwo" value={state.onePointTwo} onChange={handleChange}/>
                </label><br/>
                <label>1.3
                    <input type="text" name="onePointThree" value={state.onePointThree} onChange={handleChange}/>
                </label><br/>
                <label>1.4 Réfléchir aux spects juridiques et éthiques</label><br/>
                <label>1.5 Analyser les coûts liés au stockage</label><br/>

                <h3>Etape 2. Collecte/création des données</h3>
                <label>2.1
                    <input type="text" name="twoPointOne" value={state.twoPointOne} onChange={handleChange}/>
                </label><br/>
                <label>2.2
                    <input type="text" name="twoPointTwo" value={state.twoPointTwo} onChange={handleChange}/>
                </label><br/>
                <label>2.3
                    <input type="text" name="twoPointThree" value={state.twoPointThree} onChange={handleChange}/>
                </label><br/>

                <h3>Etape 3. Traitement et analyser des données</h3>
                <label>3.1
                    <input type="text" name="threePointOne" value={state.threePointOne} onChange={handleChange}/>
                </label><br/>
                <label>3.2
                    <input type="text" name="ThreePointTwo" value={state.threePointTwo} onChange={handleChange}/>
                </label><br/>
                <label>3.3
                    <input type="text" name="threePointThree" value={state.threePointThree} onChange={handleChange}/>
                </label><br/>

                <h3>Etape 4. Préservation et archivage des données</h3>
                <label>4.1
                    <input type="text" name="fourPointOne" value={state.fourPointOne} onChange={handleChange}/>
                </label><br/>
                <label>4.2
                    <input type="text" name="fourPointTwo" value={state.fourPointTwo} onChange={handleChange}/>
                </label><br/>
                <label>4.3
                    <input type="text" name="fourPointThree" value={state.fourPointThree} onChange={handleChange}/>
                </label><br/>
                <label>4.4 Anonymiser les données (si nécessaire)</label><br/>

                <h3>Etape 5. Partage des données</h3>
                <label>5.1
                    <input type="text" name="fivePointOne" value={state.fivePointOne} onChange={handleChange}/>
                </label><br/>
                <label>5.2
                    <input type="text" name="fivePointTwo" value={state.fivePointTwo} onChange={handleChange}/>
                </label><br/>
                <label>5.3
                    <input type="text" name="fivePointThree" value={state.fivePointThree} onChange={handleChange}/>
                </label><br/>
                <label>5.4
                    <input type="text" name="fivePointFour" value={state.fivePointFour} onChange={handleChange}/>
                </label>

                <h3>Etape 6. Réutilisation des données</h3>
                <label>6.1
                    <input type="text" name="sixPointOne" value={state.sixPointOne} onChange={handleChange}/>
                </label><br/>
                <label>6.2 Préparer la citation du dataset</label>

            </form>
            <button className = "button" onClick={backToGame}>Back to game</button>
        </div>
    )
}
