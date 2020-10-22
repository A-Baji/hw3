// Referenced from https://learnopengl.com/Lighting/Basic-Lighting

#version 330 core

out vec4 FragColor; 
  
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // Calculate ambient lighting by multiplying the ambient strength by the light color
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor; 
        
    vec3 result = ambient * objectColor;
    FragColor = vec4(result, 1.0);
} 
