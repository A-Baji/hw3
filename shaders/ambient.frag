// Referenced from https://learnopengl.com/Lighting/Basic-Lighting

#version 330 core

out vec4 FragColor; 
  
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // ambient
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor; 
        
    vec3 result = ambient * objectColor;
    FragColor = vec4(result, 1.0);
} 