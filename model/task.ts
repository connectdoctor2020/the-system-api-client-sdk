/**
 * My Doctor API
 * My Doctor API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Task { 
    /**
     * Task Id
     */
    id: number;
    /**
     * Task title
     */
    title: string;
    /**
     * Task description
     */
    description: string;
    /**
     * Task status
     */
    status: string;
    /**
     * Task user Id
     */
    userId: number;
}

