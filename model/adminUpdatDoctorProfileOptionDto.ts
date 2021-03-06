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
import { OptionItems } from './optionItems';


export interface AdminUpdatDoctorProfileOptionDto { 
    /**
     * List of IDs (e.g. qualificationId, sepcialityId) and description
     */
    entries: Array<OptionItems>;
    /**
     * Doctor iD
     */
    doctorId: number;
}

