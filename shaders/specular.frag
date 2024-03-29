// Referenced from https://learnopengl.com/Lighting/Basic-Lighting

#version 330 core

out vec4 FragColor;

in vec3 Normal;  
in vec3 FragPos;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos; 
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // Calculate the specular lighting by multiplying the reflection direction by the spec value
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float specularStrength = 0.5;
    vec3 viewDir = normalize(viewPos - FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);  // Calcultate reflection direction
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32); // Calculate spec value
    vec3 specular = specularStrength * spec * lightColor;  // Calculate specular lighting
        
    vec3 result = specular * objectColor;
    FragColor = vec4(result, 1.0);
} 
