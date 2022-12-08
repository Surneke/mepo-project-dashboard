import { createElement } from 'react';
import { useParams } from 'react-router-dom';
import {NotFound} from "../components/NotFound";

export const CustomizingPageRouter = () => {
    const { page } = useParams();
    try {
        const GeneratingComponent = () => require(`../pages/${page}`).default
        return createElement(GeneratingComponent());
    } catch (error) {
        return <NotFound />
    }
}
