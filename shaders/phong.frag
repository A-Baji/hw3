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
    // Calculate ambient lighting by multiplying the ambient strength by the light color
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;
  	
    // Calculate the diffused lighting by getting the dot product of the normal and lightDir vectors
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;
    
    // Calculate the specular lighting by multiplying the reflection direction by the spec value
    float specularStrength = 0.5;
    vec3 viewDir = normalize(viewPos - FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);  // Calcultate reflection direction
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32); // Calculate spec value
    vec3 specular = specularStrength * spec * lightColor;  
        
    vec3 result = (ambient + diffuse + specular) * objectColor;
    FragColor = vec4(result, 1.0);
} 
