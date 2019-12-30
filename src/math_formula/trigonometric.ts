import { Pattern } from "./pattern";
import { Formula } from "./formula";

/**
 * Trigonometric functions 
 * sin, cos, tan, asin, acos, atan2
 *  
 */ 


enum TriType {
    sin, cos, tan, asin, acos, atan2
}

class Tri extends Pattern {
    private type : TriType;
    
    constructor(first : Formula, second : Formula, type : TriType) {
        super(first, second);
        this.type = type;
    }
}