import { HTTP, HTTPS } from "@constants/api"

/**
 * Change HTTP на HTTPS
 * @param {string} url - for changing
 * @returns {string} - url with HTTPS
 */

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * Fetch request
 * @param {String} url 
 * @returns {Promise} - Promise with result of request
 */

export const getApiResource = async (url) => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error('Could not fetch.', response.status)
            return false
        }

        return await response.json()
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }
}