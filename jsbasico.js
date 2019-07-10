function estado()
            {
                var type = document.getElementsByName("estado-emocional");
                if(type[0].checked)
                {
                    alert("bem");
                }
                else if(type[1].checked)
                {
                    alert("medio");
                }
                else if(type[2].checked)
                {
                    alert("mal");
                }
            }

function func()
            {
                var type = document.getElementsByName("type");
                if(type[0].checked)
                {
                    alert("Human");
                }
                else if(type[1].checked)
                {
                    alert("Robot");
                }
                else if(type[2].checked)
                {
                    alert("Animals");
                }
            }


