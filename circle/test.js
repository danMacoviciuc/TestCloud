function dateRestrict(evt,provided){
		console.log($(provided).val());
		var value=$(evt.target).val(), parts = value.split('-'),
		length = parts.length,
		month, // 5
		charCode = (evt.which) ? evt.which : evt.keyCode,
		day; // 24
		console.log(evt.keyCode!==8 && evt.keyCode!==46),
		result = true;
		if(charCode!==8 && charCode!==46) {
			
			switch (length)
			{
				case 1: if(parts[0].length>1 && parts[0].length<3){
							if(value>0 && value<31){
								parts[0] = ("0"+value).slice(-2);
							}else if(value>31){
								parts[0] = ("0"+$(evt.target).val().charAt(0)).slice(-2);
							}
							$(evt.target).val(parts[0]+"-");
						}else{
							result = false;
						}
						
						break;
				case 2: if(parts[1].length>1 && parts[1].length<3){
							if( parts[1]>0 && parts[1]<10){
								parts[1] = ("0"+value.charAt(value.length-1)).slice(-2);
							}else if(parts[1]>12){
								parts[1] = ("0"+value.charAt(value.length-2)).slice(-2);
							}
							$(evt.target).val(parts[0]+"-"+parts[1]+"-");
						}else{
							result = false;
						}
						
						break;
				case 3: if(parts[2].length>1 && parts[2].length<5){
							if( parts[2]>50 && parts[2]<100){
								parts[2] = "19"+parts[2];
							} else if(parts[2]>10 && parts[2]<50){
								parts[2] = "20"+parts[2];
							} else {
								parts[2] = "20"+("0"+parts[2]).slice(-2);
							}
							
						} else{
							result = false;
						}
						$(evt.target).val(parts[0]+"-"+parts[1]+"-"+parts[2]);
						break;
				default: result = false;
			}
			
		}
		return result;
	}
	function lengthRestriction(evt, length){
		var charCode = (evt.which) ? evt.which : evt.keyCode,
			isNotNumber = charCode > 31 && (charCode < 48 || charCode > 57),
			value = $(evt.target).val() + !isNotNumber?String.fromCharCode(charCode):"";
		if(charCode === 8){
			return true;
		}else if(value.length<10){
				return true;
		}else{
				return false;
		}
	}
	function restrict(evt, isWithDecimals, separator) {
            var charCode = (evt.which) ? evt.which : evt.keyCode,
                    isNotNumber = charCode > 31 && (charCode < 48 || charCode > 57),
                    $fieldContainsDot = $(evt.target).val().indexOf('.'),
                    result;
            if (isWithDecimals) {
                if (isNotNumber) {
                    if (charCode === 46 && $fieldContainsDot === -1) {
                        result = true;
                    } else {
                        result = false;
                    }
                } else {
                    result = true;
                }
            } else if (isNotNumber) {
                result = false;
            } else {
                result = true;
            }
            return result;
        }