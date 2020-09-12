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


export interface AppointmentFilterDto { 
    /**
     * Appointment Status
     */
    status: string;
    /**
     * Start Date
     */
    startDate: Date;
    /**
     * Number of records per page
     */
    limit?: number;
    /**
     * Page number/offer
     */
    page?: number;
}
